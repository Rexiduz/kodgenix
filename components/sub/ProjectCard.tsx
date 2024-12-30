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
  imgCoverPosition?: string
}

const ProjectCard = ({
  src,
  title,
  href = '#',
  description,
  imgCoverPosition = 'left top'
}: Props) => {
  return (
    <div
      className={clsx(
        'rounded-lg shadow-lg',
        'relative overflow-hidden',
        'border border-solid border-[#2A0E61]'
      )}
    >
      <a href={href} target={href === '#' ? '_top' : '_blank'}>
        <div className="relative w-full h-[240px]">
          <Image
            fill
            src={src}
            alt={title}
            objectFit="cover"
            objectPosition={imgCoverPosition}
          />
        </div>
      </a>
      <div className="relative p-4 h-[154px] flex flex-col overflow-hidden">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <div className="flex-1 overflow-auto">
          <Typography.Paragraph
            style={{ color: 'white' }}
            ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}
          >
            {description}
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
