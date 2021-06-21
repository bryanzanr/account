var assert = require('assert');
// var expect = require('expect');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
// describe('Array', function() {
//   describe('#value', function() {
//     it('should return the value if it is present', function() {
//       expect([1,2,3][0] == 1);
//     });
//   });
// });
