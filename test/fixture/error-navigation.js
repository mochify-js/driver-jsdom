'use strict';
/*eslint-env mocha, browser*/

describe('navigation error', () => {
  it('navigates to trigger jsdomError', () => {
    // Trigger a navigation which will produce a jsdom "not implemented" error
    // on the virtual console; the driver listens and writes to stderr.
    globalThis.location.href = 'https://example.test/other';
  });
});
