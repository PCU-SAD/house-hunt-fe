import {
  AdType,
  ApartmentType,
  DistrictType,
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
  id: string
  title: string
  address: string
  price: number
  squareMeters: number
  description: string
  isFurnished: FurnishedType
  numberOfRooms: number
  floorNumber: number
  availableFrom: number
  adType: AdType
  apartmentType: ApartmentType
  owner?: OwnerType
  district: DistrictType
}

export type OwnerType = {
  id: string
  name: string
  surname: string
  email: string
  phoneNumber: string
}

export type SortOption = 'asc' | 'desc'
