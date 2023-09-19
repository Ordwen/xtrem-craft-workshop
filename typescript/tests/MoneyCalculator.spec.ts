import * as MoneyCalculator from '../src/MoneyCalculator'

describe('Money', function () {
  test('add in usd returns number', () => {
<<<<<<< HEAD
    expect(MoneyCalculator.add(5, 10)).toBeNumber()
    expect(MoneyCalculator.add(5, 10)).not.toBeNull()
    expect(MoneyCalculator.add(5, 10)).toBeGreaterThan(5)
  })

  test('multiply in eur returns positive number', () => {
    expect(MoneyCalculator.times(10, 2)).toBeGreaterThan(0)
    expect(MoneyCalculator.times(10, 2)).toBeGreaterThan(10)

=======
    const fivePlusTenAmount = MoneyCalculator.add(5, 10)
    expect(fivePlusTenAmount).toBeNumber()
    expect(fivePlusTenAmount).not.toBeNull()
  })

  test('multiply in eur returns positive number', () => {
    const tenDividedByTwoNumber = MoneyCalculator.times(10, 2)
    expect(tenDividedByTwoNumber).toBeGreaterThan(0)
>>>>>>> c2652e68073c176a8641e4218c2075f1326ae053
  })

  test('divide in korean won returns number', () => {
    const fourThousandDividedByFourNumber = MoneyCalculator.divide(4002, 4)
    expect(1000.5).toBe(fourThousandDividedByFourNumber)
  })
})
