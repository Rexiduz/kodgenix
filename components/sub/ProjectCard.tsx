'use client'

import Image from 'next/image'
import React, { ReactNode } from 'react'
import { Typography } from 'antd'
import clsx from '@/utils/clsx'

interface Props {
  src: string
  title: string
  description: ReactNode
  href?: string
}

const ProjectCard = ({ src, title, href = '#', description }: Props) => {
  return (
    <div
      className={clsx(
        'rounded-lg shadow-lg mb-4',
        'relative overflow-hidden',
        'border border-solid border-[#2A0E61]'
      )}
    >
      <a href={href} target={href === '#' ? '_top' : '_blank'}>
        <div className="relative w-full h-[240px]">
          <Image fill src={src} alt={title} objectFit="cover" />
        </div>
      </a>
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <Typography.Paragraph
          style={{ color: 'white' }}
          ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}
        >
          {description}
        </Typography.Paragraph>
      </div>
    </div>
  )
}

export default ProjectCard
