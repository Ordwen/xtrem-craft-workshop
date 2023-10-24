import * as MoneyCalculator from '../src/MoneyCalculator'
import { Currency } from '../src/Currency'
import { Money } from '../src/Money'

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

  test('should add monies when currencies are the same', () => {
    const money = new Money(5, Currency.USD)
    const sum = money.add(new Money(10, Currency.USD))

    expect(sum).toEqual(new Money(15, Currency.USD))
    expect(money).toEqual(new Money(5, Currency.USD))
  })
})
