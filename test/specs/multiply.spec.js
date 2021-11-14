const Multiplication = require('../../app/Calculator.js');
const {expect} = require('chai');

describe('multiply method of calculator scenarios', function() {
  let calculator;
  beforeEach(function() {
    calculator= new Multiplication();
  });
  afterEach(function() {
    calculator = null;
  });
  it('check multiplying up with positive numbers', function() {
    expect(calculator.multiply(4, 100, 56)).to.be.equals(22400);
  });
  it('check multiplying up with negative numbers', function() {
    expect(calculator.multiply(-4, -100, -56, 1, 1)).to.be.equals(-22400);
  });
  it('check multiplying up with negative numbers', function() {
    expect(calculator.multiply(0.67)).to.be.equals(0.67);
  });
});
