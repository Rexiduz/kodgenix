import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
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
        <ProjectCard
          src="/portfolio.png"
          title="KodGenix"
          description={
            'KodGenix is a Static Portfolio Website designed to showcase professional skills and projects. ' +
            'It provides a clean and visually appealing way for users to present their work and achievements.'
          }
        />
      </div>
    </div>
  )
}

export default Projects
