import actions from './';
import {
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
} from './types';

describe('actions', () => {
  it('should create an action to display the image', () => {
    const expectedAction = {
      type: DISPLAY_IMAGE,
      payload: true,
    };
    expect(actions.displayModal()).toEqual(expectedAction);
  })
  it('should create an action to close the image', () => {
    const expectedAction = {
      type: CLOSE_IMAGE,
      payload: false,
    };
    expect(actions.closeWidget()).toEqual(expectedAction);
  })
})