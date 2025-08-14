'use strict';
/*eslint-env mocha, browser*/

describe('driver_options.pretendToBeVisual=false', () => {
  it('disables visual timers', () => {
    if (typeof globalThis.requestAnimationFrame !== 'undefined') {
      throw new Error(
        'requestAnimationFrame should be undefined when pretendToBeVisual=false'
      );
    }
  });
});
