import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'
export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('metrics/popular-products', async () => {
  return HttpResponse.json([
    { product: 'product-01', amount: 25 },
    { product: 'product-02', amount: 32 },
    { product: 'product-03', amount: 12 },
    { product: 'product-04', amount: 54 },
    { product: 'product-05', amount: 86 },
  ])
})
