import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'
export const GetOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '118489856',
    },
    createdAt: new Date().toISOString(),
    status: 'pending',
    totalInCents: 3400,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1200,
        quantity: 2,
        product: { name: 'Pizza Frango com Mussarela' },
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        quantity: 1,
        product: { name: 'Pizza Bacon' },
      },
    ],
  })
})
