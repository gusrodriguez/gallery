import actions from './';
import {
  LOAD_IMAGES,
  REQUEST_IMAGES,
  CLOSE_IMAGE,
} from './types';

describe('actions', () => {
  it('should create an action to load images', () => {
    const mockedResponse = { data: [] };
    const expectedAction = {
      type: LOAD_IMAGES,
      payload: {
        images: [],
        fetching: false,
      },
    };
    expect(actions.loadImages(mockedResponse)).toEqual(expectedAction);
  })
  it('should create an action to request images', () => {
    const expectedAction = {
      type: REQUEST_IMAGES,
      payload: { fetching: true },
    };
    expect(actions.requestImages()).toEqual(expectedAction);
  });
  it('should create an action to close the images', () => {
    const expectedAction = {
      type: CLOSE_IMAGE,
      payload: null,
    };
    expect(actions.closeImage()).toEqual(expectedAction);
  })
})
