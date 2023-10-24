import { Money } from './Money'

export class CurrencyMismatchError extends Error {
  constructor (left: Money, right: Money) {
    super('Currency ' + left.currency + ' is different from ' + right.currency)
  }

  message: string
}
