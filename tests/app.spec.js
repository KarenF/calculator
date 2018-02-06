const expect = require('chai').expect
const calc = require('../src/app.js')

describe('Calc', () => {
  describe('smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist
    })
    it('should exist method `sum`', () => {
      expect(calc.sum).to.exist
      expect(calc.sum).to.be.a('function')
    })
    it('should exist method `sub`', () => {
      expect(calc.sub).to.exist
      expect(calc.sub).to.be.a('function')
    })
    it('should exist method `mult`', () => {
      expect(calc.mult).to.exist
      expect(calc.mult).to.be.a('function')
    })
    it('should exist method `div`', () => {
      expect(calc.div).to.exist
      expect(calc.div).to.be.a('function')
    })
  })
  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2,2)).to.be.equal(4)
    })
  })
  describe('Sub', () => {
    it('should return 0 when `sub(2,2)`', () => {
      expect(calc.sub(2,2)).to.be.equal(0)
    })
    it('should return -4 when `sub(6,10)`', () => {
      expect(calc.sub(6,10)).to.be.equal(-4)
    })
  })
  describe('Mult', () => {
    it('should return 6 when `mult(2,3)`', () => {
      expect(calc.mult(2,3)).to.be.equal(6)
    })
    describe('Div', () => {
      it('should return 1 when `div(2,2)`', () => {
        expect(calc.div(2,2)).to.be.equal(1)
      })
      it('should return `You cant divide a number by zero!` when divide by 0', () => {
        expect(calc.div(2,0)).to.be.equal('You cant divide a number by zero!')
      })
    })
  })
})
