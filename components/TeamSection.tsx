export default function TeamSection() {
  const team = [
    {
      name: "John Smith",
      role: "Designation here",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20012131-yaHVUUvz1L5Pmld5PMED7eVdVdfOIT.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida adipiscing bibendum euismod morbi et. Sed dui in consectetur pellentesque."
    },
    {
      name: "Elina Williams",
      role: "Designation here",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20012131-yaHVUUvz1L5Pmld5PMED7eVdVdfOIT.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida adipiscing bibendum euismod morbi et. Sed dui in consectetur pellentesque."
    },
    {
      name: "John Smith",
      role: "Designation here",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20012131-yaHVUUvz1L5Pmld5PMED7eVdVdfOIT.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida adipiscing bibendum euismod morbi et. Sed dui in consectetur pellentesque."
    }
  ]

  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>
      <p className="text-[#3E424A] text-sm mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat et sed tempus sit ornare. Urna sed tempor diam ullamcorper ornare in metus.
      </p>
      
      <div className="space-y-4">
        {team.map((member, index) => (
          <div key={index} className="bg-[#E8F4FD] p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-center md:w-48">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-lg mx-auto mb-2"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
              <p className="text-sm text-[#3E424A] flex-1">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

