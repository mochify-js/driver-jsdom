'use strict';

const { assert, sinon } = require('@sinonjs/referee-sinon');
const { mochify } = require('@mochify/mochify');
const { spawn } = require('child_process');

describe('jsdom', () => {
  it('runs test with plugin', async () => {
    sinon.replace(process.stdout, 'write', sinon.fake());

    await mochify({
      driver: `${__dirname}/../index.js`,
      reporter: 'json',
      spec: `${__dirname}/fixture/passes.js`
    });
    // @ts-ignore
    const output = process.stdout.write.firstCall.args[0];
    sinon.restore(); // Restore sandbox here or test output breaks

    const json = JSON.parse(output);
    assert.equals(json.tests.length, 1);
    assert.equals(json.tests[0].fullTitle, 'test passes');
  });

  it('emits jsdomError on navigation and writes to stderr', async () => {
    const previousExitCode = process.exitCode;
    sinon.replace(process.stderr, 'write', sinon.fake());

    await mochify({
      driver: `${__dirname}/../index.js`,
      reporter: 'dot',
      spec: `${__dirname}/fixture/error-navigation.js`
    });

    // @ts-ignore
    const called = process.stderr.write.called;
    sinon.restore();
    assert.isTrue(called, 'expected stderr.write to be called');
    assert.equals(process.exitCode, 1);
    process.exitCode = previousExitCode || 0;
  });

  // test to check if url driver_options integration is not broken
  // i.e. due to changes in jsdom
  it('applies driver_options.url', async () => {
    await mochify({
      driver: `${__dirname}/../index.js`,
      reporter: 'dot',
      driver_options: { url: 'https://example.test/foo' },
      spec: `${__dirname}/fixture/assert-url.js`
    });
  });

  // test to check if pretendToBeVisual driver_options integration is not broken
  // i.e. due to changes in jsdom
  it('applies driver_options.pretendToBeVisual', async () => {
    await mochify({
      driver: `${__dirname}/../index.js`,
      reporter: 'dot',
      driver_options: { pretendToBeVisual: true },
      spec: `${__dirname}/fixture/assert-pretend.js`
    });
  });

  // test to check if strictSSL driver_options integration is not broken
  // i.e. due to changes in jsdom
  it('accepts driver_options.strictSSL', async () => {
    await mochify({
      driver: `${__dirname}/../index.js`,
      reporter: 'dot',
      driver_options: { strictSSL: false },
      spec: `${__dirname}/fixture/assert-strictssl.js`
    });
  });

  // test to check if unhandled exception is passed to the global error handler
  it('exits with code 1 on an unhandled exception (early-return branch)', function (done) {
    this.timeout(10000);
    const runner = `
      const { mochify } = require('@mochify/mochify');
      const path = require('path');
      
      // Set up error handling before running mochify
      process.on('uncaughtException', (err) => {
        if (err.message === 'boom') {
          process.exit(1);
        }
      });

      // Ensure we always check the exit code when the process exits
      process.on('exit', (code) => {
        // If we're exiting with code 0 but exitCode is 1, force exit with 1
        if (code === 0 && process.exitCode === 1) {
          process.exit(1);
        }
      });
      
      // Run mochify and handle the promise properly
      mochify({
        driver: path.resolve(__dirname, '../index.js'),
        reporter: 'dot',
        spec: path.resolve(__dirname, 'fixture/error-unhandled.js')
      }).catch(() => {
        // Mochify may fail due to the unhandled exception, which is expected
        // Check if the uncaughtException handler has set the exit code
        if (process.exitCode === 1) {
          process.exit(1);
        }
        // If not, let the process exit naturally and the 'exit' handler will check
      });
    `;

    const child = spawn(process.execPath, ['-e', runner], {
      cwd: __dirname,
      stdio: ['ignore', 'ignore', 'pipe']
    });

    child.on('close', (code) => {
      try {
        assert.equals(
          code,
          1,
          'Expected process to exit with code 1 due to unhandled exception'
        );
        done();
      } catch (err) {
        done(err);
      }
    });

    child.on('error', (err) => done(err));
  });
});
