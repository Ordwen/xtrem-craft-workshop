export class NegativeMoneyError extends Error {
  message: string

  constructor () {
    super('Money cannot be negative')
  }
}
