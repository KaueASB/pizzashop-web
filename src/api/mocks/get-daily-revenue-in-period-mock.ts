import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'
export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('metrics/daily-receipt-in-period', async () => {
  return HttpResponse.json([
    { date: '01/02/2024', receipt: 2000 },
    { date: '02/02/2024', receipt: 3000 },
    { date: '03/02/2024', receipt: 6423 },
    { date: '04/02/2024', receipt: 200 },
    { date: '05/02/2024', receipt: 2055 },
    { date: '06/02/2024', receipt: 890 },
    { date: '07/02/2024', receipt: 2000 },
  ])
})
