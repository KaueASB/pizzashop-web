import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', async () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    managerId: 'custo-user-id',
    name: 'Custom Pizza Shop',
    description: 'Pizzaria',
    createdAt: new Date(),
    updatedAt: null,
  })
})
