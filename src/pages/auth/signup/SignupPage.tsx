import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OwnerTabForm from '@/pages/auth/components/tabs/OwnerTabForm/OwnerTabForm'
import TenantTabForm from '@/pages/auth/components/tabs/TenantTabForm/TenantTabForm'

function SignupPage() {
  return (
    <div className="flex h-screen flex-col sm:items-center">
      <div className="mt-12 px-4">
        <Tabs
          defaultValue="tenant"
          className="mx-auto w-full min-w-[330px] max-w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tenant">Tenant</TabsTrigger>
            <TabsTrigger value="owner">Owner</TabsTrigger>
          </TabsList>

          <TabsContent value="tenant">
            <TenantTabForm />
          </TabsContent>

          <TabsContent value="owner">
            <OwnerTabForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default SignupPage
