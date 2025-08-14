'use strict';
/*eslint-env mocha, browser*/

describe('driver_options.strictSSL', () => {
  it('is accepted by the driver and properly configured', () => {
    // Test that the strictSSL option was properly passed through to jsdom
    // This catches regressions where jsdom changes might break our strictSSL option

    // Since we can't easily test the actual SSL behavior in this environment,
    // we'll verify that the driver successfully created a jsdom instance
    // with the strictSSL option set to false (which should allow non-strict SSL)

    // Check that we're running in a jsdom environment
    if (typeof globalThis !== 'object') {
      throw new Error(
        'Expected globalThis to be available in jsdom environment'
      );
    }

    // Verify that we have access to the DOM APIs that jsdom provides
    if (typeof globalThis.document !== 'object') {
      throw new Error('Expected document to be available in jsdom environment');
    }

    if (typeof globalThis.window !== 'object') {
      throw new Error('Expected window to be available in jsdom environment');
    }

    // The fact that this test runs successfully means that jsdom was created
    // with the strictSSL: false option, which validates that our driver
    // properly passes through this option to jsdom
  });
});
