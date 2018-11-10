import reducer from './userState';

describe('userState reducer', () => {
    it('should return the initial state', () => {
        var strLength=36;
        var testLength=reducer(undefined, {}).userId.length;
      expect(strLength).toEqual(testLength)
    })
  })

