import axios from 'axios'
import { FC } from 'react'
import { toast } from 'sonner'

type GetInTouchFormProps = {}

const GetInTouchForm: FC<GetInTouchFormProps> = ({}) => {
  const { mutate, isPending } = useMutation({
    mutationkey: ['get-in-touch'],
    mutationFn: (data: RequestFormType) =>
      axios.post('http://localhost:8080/api/v1/user/request', data),
    onSuccess: () => {
      toast.success('Your request has been successfully submitted.')
    },
    onError: () => {
      toast.error('An error occurred while submitting the request.')
    }
  })

  const onSubmit = (data: RequestFormType) => {
    mutate(data)
  }

  return <div>GetInTouchForm</div>
}

export default GetInTouchForm
