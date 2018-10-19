import reducer from './reducer'
import {
  CLOSE_IMAGE,
  DISPLAY_ERROR,
} from './actions/types';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        error: false,
        imageDisplayed: null,
        nextPage: 1,
        images: [],
        fetching: true,
      },
      );
  });
  it('should handle CLOSE_IMAGES', () => {
    expect(
      reducer([], {
        type: CLOSE_IMAGE,
        payload: null,
      }),
    ).toEqual({ imageDisplayed: null },
    );
  });
  it('should handle DISPLAY_ERROR', () => {
    expect(
      reducer([], {
        type: DISPLAY_ERROR,
        payload: true,
      }),
    ).toEqual({ error: true, fetching: false },
    );
  });
});
