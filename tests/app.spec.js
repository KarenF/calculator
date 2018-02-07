import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/app'

describe('Calc', () => {
  describe('smoke tests', () => {
    it('should exist method `sum`', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })
    it('should exist method `sub`', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })
    it('should exist method `mult`', () => {
      expect(mult).to.exist
      expect(mult).to.be.a('function')
    })
    it('should exist method `div`', () => {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })
  })
  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4)
    })
  })
  describe('Sub', () => {
    it('should return 0 when `sub(2,2)`', () => {
      expect(sub(2,2)).to.be.equal(0)
    })
    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6,10)).to.be.equal(-4)
    })
  })
  describe('Mult', () => {
    it('should return 6 when `mult(2,3)`', () => {
      expect(mult(2,3)).to.be.equal(6)
    })
    describe('Div', () => {
      it('should return 1 when `div(2,2)`', () => {
        expect(div(2,2)).to.be.equal(1)
      })
      it('should return `You cant divide a number by zero!` when divide by 0', () => {
        expect(div(2,0)).to.be.equal('You cant divide a number by zero!')
      })
    })
  })
})
