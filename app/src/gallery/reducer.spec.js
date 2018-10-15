import reducer from './reducer'
import {
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
  LOAD_IMAGES,
  RESIZE_IMAGES,
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
  it('should handle RESIZE_IMAGES', () => {
    expect(
      reducer([], {
        type: RESIZE_IMAGES,
        payload: { imageSize: 100 },
      }),
    ).toEqual({
      imageSize: 100,
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
