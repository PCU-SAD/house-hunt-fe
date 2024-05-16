import {
  AdType,
  ApartmentType,
  FurnishedType,
  NewPropertyFormType
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'

export type CreatePropertyRequest = NewPropertyFormType & {
  ownerEmail: string | undefined
}

export type GetAllPropertiesResponse = {
  content: PropertyType[]
  pageable: PaginationT
  totalPages: number
  first: boolean
  last: boolean
}

export type PaginationT = {
  pageNumber: number
  pageSize: number
}

export type PropertyType = {
  adType: AdType
  address: string
  apartmentType: ApartmentType
  availableFrom: number
  description: string
  floorNumber: number
  id: string
  isFurnished: FurnishedType
  numberOfRooms: number
  owner: {
    id: string
    name: string
    surname: string
    email: string
    phoneNumber: string
  }
  price: number
  squareMeters: number
  title: string
}
