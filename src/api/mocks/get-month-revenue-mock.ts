import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueAmountMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-receipt', async () => {
  return HttpResponse.json({
    receipt: 50000,
    diffFromLastMonth: 9,
  })
})
