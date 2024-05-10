import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'

export type CreatePropertyRequest =  NewPropertyFormType & {
	ownerEmail?: string
}