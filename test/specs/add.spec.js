const Addition = require('../../app/Calculator.js');
const {expect} = require('chai');

describe('add method of calculator scenarios', function() {
  let calculator;
  beforeEach(function() {
    calculator= new Addition();
  });
  afterEach(function() {
    calculator = null;
  });
  it('check summing up with positive numbers', function() {
    expect(calculator.add(4, 100, 56)).to.equal(160);
  });
  it('check summing up with negative numbers', function() {
    expect(calculator.add(-4, -9, -1)).to.be.equal(-14);
  });
  it('check summing up without parameters', function() {
    expect(calculator.add()).to.be.equal(0);
  });
});
