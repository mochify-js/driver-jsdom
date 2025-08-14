'use strict';
/*eslint-env mocha, browser*/
/*global requestAnimationFrame, cancelAnimationFrame*/

describe('driver_options.pretendToBeVisual', () => {
  it('enables visual timers when true', () => {
    // Test that the pretendToBeVisual option was properly passed through to jsdom
    // This catches regressions where jsdom changes might break our pretendToBeVisual option

    // Check that requestAnimationFrame is available (indicates pretendToBeVisual is working)
    if (typeof requestAnimationFrame !== 'function') {
      throw new Error(
        'Expected requestAnimationFrame to be available when pretendToBeVisual is true'
      );
    }

    // Check that cancelAnimationFrame is also available
    if (typeof cancelAnimationFrame !== 'function') {
      throw new Error(
        'Expected cancelAnimationFrame to be available when pretendToBeVisual is true'
      );
    }

    // Test that we can actually schedule and cancel an animation frame
    let frameId;
    try {
      frameId = requestAnimationFrame(() => {});
      if (typeof frameId !== 'number') {
        throw new Error('requestAnimationFrame should return a number');
      }
      cancelAnimationFrame(frameId);
    } catch (error) {
      throw new Error(`Failed to use requestAnimationFrame: ${error.message}`);
    }
  });
});
