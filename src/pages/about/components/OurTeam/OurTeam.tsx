import { FC } from 'react'

const OurTeam: FC = () => {
  return (
    <section className="w-full py-12 ">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Team
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet the talented individuals behind our success.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Team Member 1"
              className="h-40 w-40 rounded-full object-cover"
              height={400}
              // take some picture form unsplash
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              style={{
                aspectRatio: '400/400',
                objectFit: 'cover'
              }}
              width={400}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-500 dark:text-gray-400">CEO</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                John is the visionary leader who has guided our company to
                success.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Team Member 2"
              className="h-40 w-40 rounded-full object-cover"
              height={400}
              // take some picture form unsplash
              src="https://source.unsplash.com/grayscale-photo-of-man-c_GmwfHBDzk"
              style={{
                aspectRatio: '400/400',
                objectFit: 'cover'
              }}
              width={400}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-500 dark:text-gray-400">CTO</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jane is the technical mastermind behind our innovative products.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Team Member 3"
              className="h-40 w-40 rounded-full object-cover"
              height={400}
              // take some picture form unsplash
              src="https://source.unsplash.com/man-in-black-jacket-smiling-a19OVaa2rzA"
              style={{
                aspectRatio: '400/400',
                objectFit: 'cover'
              }}
              width={400}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-gray-500 dark:text-gray-400">Lead Designer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Michael is the creative genius behind our stunning designs.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Team Member 4"
              className="h-40 w-40 rounded-full object-cover"
              height={400}
              // take some picture form unsplash
              src="https://source.unsplash.com/man-in-black-crew-neck-shirt-uyaTT9u6AvI"
              style={{
                aspectRatio: '400/400',
                objectFit: 'cover'
              }}
              width={400}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-semibold">Emily Davis</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Marketing Manager
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Emily is the driving force behind our successful marketing
                campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
