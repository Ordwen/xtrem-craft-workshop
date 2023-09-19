import * as MoneyCalculator from '../src/MoneyCalculator'

describe('Money', function () {
  test('add in usd returns number', () => {
    const fivePlusTenAmount = MoneyCalculator.add(5, 10)
    expect(fivePlusTenAmount).toBeNumber()
    expect(fivePlusTenAmount).not.toBeNull()
  })

  test('multiply in eur returns positive number', () => {
    const tenDividedByTwoNumber = MoneyCalculator.times(10, 2)
    expect(tenDividedByTwoNumber).toBeGreaterThan(0)
  })

  test('divide in korean won returns number', () => {
    const fourThousandDividedByFourNumber = MoneyCalculator.divide(4002, 4)
    expect(1000.5).toBe(fourThousandDividedByFourNumber)
  })
})
