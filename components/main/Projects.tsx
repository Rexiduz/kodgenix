'use client'

import { useResponsiveValue } from '@/utils/hooks'
import ProjectCard from '../sub/ProjectCard'
import { Col, Row } from 'antd'

const Projects = () => {
  const [gutter, span] = useResponsiveValue([0, 24], {
    768: [16, 12],
    1200: [16, 24 / 4]
  })

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="px-10">
        <Row gutter={gutter}>
          <Col span={span}>
            <ProjectCard
              src="/zqcargo.png"
              href="https://zq-cargo.com"
              title="ZQ Cargo"
              description={
                'ZQ Cargo is a Logistics Business Website & Web Application ' +
                'that streamlines shipping and transportation services. ' +
                'It offers users an efficient platform to manage and track their logistics operations seamlessly.'
              }
            />
          </Col>
          <Col span={span}>
            <ProjectCard
              src="/siwaporn-houses.png"
              title="Siwaporn Houses"
              href="https://siwaporn-houses.netlify.app/"
              description={
                'Siwaporn Houses specializes in designing and delivering custom-built and pre-fabricated modular homes. ' +
                'With efficient home delivery services, the company meets the needs of individuals seeking fast and hassle-free housing solutions.'
              }
            />
          </Col>
          <Col span={span}>
            <ProjectCard
              src="/fbcms.png"
              title="FB CMS"
              href="https://fbcms.netlify.app/"
              description={
                'The simplest CMS single-page application like Facebook. ' +
                'Let\'s try with username: "demo@fbcms.com" and password: "P@ssword"'
              }
            />
          </Col>
          <Col span={span}>
            <ProjectCard
              src="/portfolio.png"
              title="KodGenix"
              description={
                'KodGenix is a Static Portfolio Website designed to showcase professional skills and projects. ' +
                'It provides a clean and visually appealing way for users to present their work and achievements.'
              }
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Projects
