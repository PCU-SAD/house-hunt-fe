import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { CZK_DATE_FORMAT } from '@/utils/consts'
import { format } from 'date-fns'
import {
  BedIcon,
  Calendar,
  Home,
  Layers,
  LayoutPanelLeft,
  LocateIcon,
  RulerIcon
} from 'lucide-react'
import { FC } from 'react'

type NewPropertyPreviewProps = {
  property: NewPropertyFormType
}

const czkMoneyFormatter = Intl.NumberFormat('cs-Cz', {
  currency: 'CZK',
  currencyDisplay: 'narrowSymbol',
  currencySign: 'standard',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const NewPropertyPreview: FC<NewPropertyPreviewProps> = ({ property }) => {
  const {
    squareMeters,
    address,
    price,
    adType,
    numberOfRooms,
    floorNumber,
    apartmentType,
    availableFrom,
    isFurnished
  } = property

  const lowercaseApType = apartmentType.toLowerCase().split('_').join(' + ')

  const formattedApType =
    lowercaseApType.at(0).toUpperCase() + lowercaseApType.slice(1)

  const formattedPrice =
    adType === 'RENTAL'
      ? czkMoneyFormatter.format(price) + ' / monthly'
      : czkMoneyFormatter.format(price)

  const formattedAvailableFrom = format(availableFrom, CZK_DATE_FORMAT)

  const furnishedMessage: {
    [key: string]: string
  } = {
    FURNISHED: 'Furnished',
    UNFURNISHED: 'Not furnished',
    SEMI_FURNISHED: 'Half furnished'
  }

  const rooms = numberOfRooms > 1 ? 'rooms' : 'room'

  return (
    <Card className="h-full w-full">
      <CardHeader className="pb-4">
        <div className="h-52 w-full rounded-md bg-slate-100 object-contain" />
      </CardHeader>
      <CardContent className="space-y-4 p-6 pt-0">
        <div>
          <h3 className="text-xl font-bold">{property.title}</h3>
          <p className="mt-1 text-base text-muted-foreground">
            {property.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>{formattedAvailableFrom}</div>
            </div>
            <p className="pl-7 text-xs  text-muted-foreground">
              Available from
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Home className="h-5 w-5 text-muted-foreground" />
            <div>{furnishedMessage[isFurnished]}</div>
          </div>

          <div className="flex items-center gap-2">
            <RulerIcon className="h-5 w-5 text-muted-foreground" />
            <div>{squareMeters} sq m</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-[16px] text-muted-foreground">Kč</div>
            <div>{formattedPrice}</div>
          </div>

          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-muted-foreground" />
            <div>{floorNumber} floor</div>
          </div>

          <div className="flex items-center gap-2">
            <BedIcon className="h-5 w-5 text-muted-foreground" />
            <div>{`${numberOfRooms} ${rooms}`}</div>
          </div>

          <div className="flex items-center gap-2">
            <LayoutPanelLeft className="h-5 w-5 text-muted-foreground" />
            <div>{formattedApType}</div>
          </div>

          <div className="flex items-center gap-2">
            <LocateIcon className="h-5 w-5 text-muted-foreground" />
            <div className="max-w-[140px] break-words">{address} address</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default NewPropertyPreview
