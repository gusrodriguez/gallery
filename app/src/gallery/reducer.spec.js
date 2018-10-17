import reducer from './reducer'
import {
  CLOSE_IMAGE,
} from './actions/types';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        imageDisplayed: null,
        nextPage: 1,
        imageSize: 200,
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
});
