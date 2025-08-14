'use strict';
/*eslint-env mocha, browser*/

describe('driver_options.url', () => {
  it('sets window.location.href', () => {
    // Test that the url option was properly passed through to jsdom
    // This catches regressions where jsdom changes might break our url option
    const expectedUrl = 'https://example.test/foo';
    const actualUrl = globalThis.location.href;

    if (actualUrl !== expectedUrl) {
      throw new Error(
        `Expected location.href to be "${expectedUrl}" but got "${actualUrl}"`
      );
    }

    // Additional validation that the location object is properly configured
    if (
      typeof globalThis.location !== 'object' ||
      globalThis.location === null
    ) {
      throw new Error('location should be an object');
    }
    if (globalThis.location.protocol !== 'https:') {
      throw new Error(
        `Expected protocol to be "https:" but got "${globalThis.location.protocol}"`
      );
    }
    if (globalThis.location.hostname !== 'example.test') {
      throw new Error(
        `Expected hostname to be "example.test" but got "${globalThis.location.hostname}"`
      );
    }
    if (globalThis.location.pathname !== '/foo') {
      throw new Error(
        `Expected pathname to be "/foo" but got "${globalThis.location.pathname}"`
      );
    }
  });
});
