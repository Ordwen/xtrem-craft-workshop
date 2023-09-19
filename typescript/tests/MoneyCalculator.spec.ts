import { add, times, divide } from '../src/MoneyCalculator'

describe('Money', function () {
  test('add in usd returns number', () => {
    expect(add(5, 10)).toBeNumber()
    expect(add(5, 10)).not.toBeNull()
  })

  test('multiply in eur returns positive number', () => {
    expect(times(10, 2)).toBeGreaterThan(0)
  })

  test('divide in korean won returns number', () => {
    expect(1000.5).toBe(divide(4002, 4))
  })
})
