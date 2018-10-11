import reducer from './reducer'
import {
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
} from './actions/types';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      images: [],
      imageDisplayed: false,
    },
    );
  });
  it('should handle DISPLAY_IMAGE', () => {
    expect(
      reducer([], {
        type: DISPLAY_IMAGE,
        payload: true,
      }),
    ).toEqual(
      { imageDisplayed: true },
    );
  });
  it('should handle CLOSE_IMAGE', () => {
    expect(
      reducer([], {
        type: CLOSE_IMAGE,
        payload: false,
      }),
    ).toEqual(
      { imageDisplayed: false },
    );
  });
});
