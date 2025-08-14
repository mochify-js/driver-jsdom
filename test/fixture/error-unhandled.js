'use strict';
/*eslint-env mocha, browser*/

describe('unhandled exception', () => {
  it('schedules an unhandled exception', () => {
    // Install a global onerror handler to simulate client logging,
    // which the driver avoids duplicating.
    // eslint-disable-next-line no-undef
    self.onerror = () => {};
    setTimeout(() => {
      // Throwing here creates an unhandled exception in jsdom,
      // which the driver should not duplicate to stderr.
      throw new Error('boom');
    }, 0);
  });
});
