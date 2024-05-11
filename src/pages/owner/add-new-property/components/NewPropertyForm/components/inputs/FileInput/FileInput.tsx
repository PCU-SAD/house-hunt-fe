import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import FilePreview from '@/pages/owner/add-new-property/components/NewPropertyForm/components/FileInput/Preview'
import { getImageData } from '@/utils/GetImageData'

import { PlusIcon } from 'lucide-react'
import { FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'

type FileInputProps = {
  name: string
}

const FileInput: FC<FileInputProps> = ({ name }) => {
  const form = useFormContext()
  const [currentPreview, setCurrentPreview] = useState('')

  return (
    <FormField
      control={form.control}
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ field: { value, onChange, ...rest } }) => {
        return (
          <FormItem className="sm:flex-none">
            {currentPreview ? (
              <FilePreview
                onChange={onChange}
                setCurrentPreview={setCurrentPreview}
                currentPreview={currentPreview}
              />
            ) : (
              <FormLabel className="flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded border border-dashed">
                <PlusIcon />
              </FormLabel>
            )}

            <FormControl>
              <Input
                type="file"
                placeholder="Choose images"
                accept="image/*"
                className="sr-only"
                {...rest}
                onChange={(event) => {
                  const { displayUrl } = getImageData(event)
                  setCurrentPreview(displayUrl)

                  onChange(event.target?.files?.[0] ?? undefined)
                }}
              />
            </FormControl>
          </FormItem>
        )
      }}
    />
  )
}

export default FileInput
