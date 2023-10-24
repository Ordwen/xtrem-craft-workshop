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

  test('equals returns true when currencies and amounts are the same', () => {
    const money = new Money(5, Currency.USD)
    const otherMoney = new Money(5, Currency.USD)

    expect(money.equals(otherMoney)).toBeTruthy()

    const moneyInEur = new Money(5, Currency.EUR)
    expect(money.equals(moneyInEur)).toBeFalsy()
  })

  test('should multiply money', () => {
    const money = new Money(5, Currency.USD)
    const mult = money.times(10)

    expect(mult).toEqual(new Money(50, Currency.USD))
    expect(money).toEqual(new Money(5, Currency.USD))
  })

  test('should result to 0 money', () => {
    const money = new Money(5, Currency.USD)
    const mult = money.times(0)

    expect(mult).toEqual(new Money(0, Currency.USD))
    expect(money).toEqual(new Money(5, Currency.USD))
  })

  test('divide by a valid number', () => {
    const money = new Money(10, Currency.USD)
    const divided = money.divide(2)

    expect(divided).toEqual(new Money(5, Currency.USD))
    expect(money).toEqual(new Money(10, Currency.USD))
  })

  test('divide by 0 throws an error', () => {
    const money = new Money(10, Currency.USD)
    expect(() => money.divide(0)).toThrow()
  })
})
