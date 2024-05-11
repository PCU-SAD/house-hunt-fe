import PropertyCard from '@/pages/properties/components/PropertyCard/PropertyCard'
import { PropertyType } from '@/services/property-service/types'
import { FC } from 'react'

type PropertiesListProps = {
  properties: PropertyType[]
}

const PropertiesList: FC<PropertiesListProps> = ({ properties }) => {
  return properties.map((property) => {
    return <PropertyCard key={property.id} property={property} />
  })
}

export default PropertiesList
