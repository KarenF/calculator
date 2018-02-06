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
})
