import * as MoneyCalculator from '../src/MoneyCalculator'

describe('Money', function () {
  test('add in usd returns number', () => {
    expect(MoneyCalculator.add(5, 10)).toBe(15)
  })

  test('multiply in eur returns positive number', () => {
    expect(MoneyCalculator.times(10, 2)).toBe(20)

  })

  test('divide in korean won returns number', () => {
    const fourThousandDividedByFourNumber = MoneyCalculator.divide(4002, 4)
    expect(1000.5).toBe(fourThousandDividedByFourNumber)
  })
})
