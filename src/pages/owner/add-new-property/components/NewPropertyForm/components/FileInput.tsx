import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PlusIcon, Trash } from 'lucide-react'
import { ChangeEvent, FC, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  const dataTransfer = new DataTransfer()

  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image)
  )

  const files = dataTransfer.files
  const displayUrl = URL.createObjectURL(event.target.files![0])

  return { files, displayUrl }
}

type FileInputProps = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>
}

const FileInput: FC<FileInputProps> = ({ name, form }) => {
  const [currentPreview, setCurrentPreview] = useState('')

  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      <FormField
        control={form.control}
        name={name}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field: { value, onChange, ...rest } }) => {
          return (
            <FormItem>
              {currentPreview ? (
                <div className="flex items-end gap-2">
                  <div className="group relative flex h-[130px] w-[130px] cursor-pointer items-center justify-center rounded border border-dashed p-2 transition-colors duration-300 hover:bg-white">
                    <img
                      src={currentPreview}
                      className="object-contain transition-opacity group-hover:opacity-[10%]"
                    />
                    <Button
                      size="noSize"
                      className="absolute p-8 opacity-0 transition-opacity hover:bg-transparent group-hover:opacity-100 "
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        setCurrentPreview('')
                        onChange([])
                      }}>
                      <Trash width={18} height={18} />
                    </Button>
                  </div>
                </div>
              ) : (
                <FormLabel className="grid h-[130px] w-[130px] cursor-pointer place-items-center rounded border border-dashed">
                  <PlusIcon />
                </FormLabel>
              )}

              <FormControl>
                <Input
                  type="file"
                  placeholder="Choose images"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
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
    </div>
  )
}

export default FileInput
