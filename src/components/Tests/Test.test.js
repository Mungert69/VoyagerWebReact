import * as actions from '../../actions/actions';
import * as types from '../../actions/types';
import * as apiActions from '../../actions/apiActions';


describe('actions', () => {
  it('should create an action to set card type', () => {
    const cardType = 'hotel';
    const expectedAction = {
      type: types.ActionTypes.SET_CARD_TYPE,
      payload : cardType
    };
    expect(actions.setCardType(cardType)).toEqual(expectedAction);
  });
});