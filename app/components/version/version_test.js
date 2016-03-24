'use strict';

describe('flightSearch.version module', function() {
  beforeEach(module('flightSearch.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
