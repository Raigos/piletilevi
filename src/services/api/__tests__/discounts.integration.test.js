import { fetchDiscounts } from '../discounts'

describe('fetchDiscounts Integration', () => {
  let apiResponse
  let responseTime

  beforeAll(async () => {
    const startTime = Date.now()
    apiResponse = await fetchDiscounts()
    responseTime = Date.now() - startTime
  })

  test('API responds within 2 seconds', () => {
    expect(responseTime).toBeLessThan(2000)
  })

  test('fetches discounts with exact data structure', () => {
    expect(Array.isArray(apiResponse)).toBe(true)

    const firstDiscount = apiResponse[0]

    const expectedKeys = [
      'id',
      'name',
      'startDate',
      'endDate',
      'discountAmount',
      'category',
    ]
    expect(Object.keys(firstDiscount).sort()).toEqual(expectedKeys.sort())

    expect(typeof firstDiscount.id).toBe('number')
    expect(typeof firstDiscount.name).toBe('string')
    expect(typeof firstDiscount.startDate).toBe('string')
    expect(typeof firstDiscount.endDate).toBe('string')
    expect(typeof firstDiscount.discountAmount).toBe('number')
    expect(typeof firstDiscount.category).toBe('string')
  })
})
