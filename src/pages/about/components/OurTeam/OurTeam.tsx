import { FC } from 'react'
import Img1 from '/images/our-team/matvii.jpg'
import Img2 from '/images/our-team/burak.png'
import Img3 from '/images/our-team/3.jpeg'
import Img4 from '/images/our-team/4.jpeg'

type TeamMember = {
  id: number
  name: string
  role: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    description:
      'John is the visionary leader who has guided our company to success.',
    image: Img1
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    description:
      'Jane is the technical mastermind behind our innovative products.',
    image: Img2
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Lead Designer',
    description: 'Michael is the creative genius behind our stunning designs.',
    image: Img3
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Marketing Manager',
    description:
      'Emily is the driving force behind our successful marketing campaigns.',
    image: Img4
  }
]

const OurTeam: FC = () => {
  return (
    <section className="w-full py-12" id="our-team">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Team
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet the talented individuals behind our success.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md">
              <img
                alt={`Team Member ${member.id}`}
                className="h-40 w-40 rounded-full object-cover"
                height={400}
                src={member.image}
                style={{
                  aspectRatio: '400/400',
                  objectFit: 'cover'
                }}
                width={400}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
