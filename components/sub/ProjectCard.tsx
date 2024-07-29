import Image from 'next/image'
import React, { ReactNode } from 'react'

interface Props {
  src: string
  title: string
  description: ReactNode
  href?: string
}

const ProjectCard = ({ src, title, href = '#', description }: Props) => {
  return (
    <a
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
      href={href}
      target={href === '#' ? '_top' : '_blank'}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <div className="mt-2 text-gray-300">{description}</div>
      </div>
    </a>
  )
}

export default ProjectCard
