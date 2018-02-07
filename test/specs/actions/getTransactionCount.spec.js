import { getTransactionCount } from '../../../src/actions';

describe('actions', () => {
  it('should create an action to get transaction count', () => {
    const block = 1;
    const expectedAction = {
      type: 'GET_TRANSACTION_COUNT'
    };
    expect(getTransactionCount(block)).toEqual(expectedAction);
  });
});
