import React from 'react'
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'
import { MdOutlineEmail } from 'react-icons/md'
import LogoSVG from './LogoSVG'

const Navbar = () => {
  const {
    NEXT_PUBLIC_APP_NAME: appName,
    NEXT_PUBLIC_GITHUB: github,
    NEXT_PUBLIC_EMAIL: email,
    NEXT_PUBLIC_LINKEDIN: linkedIn
  } = process.env

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-0 lg:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex-row items-center hidden md:flex text-white"
        >
          <LogoSVG />
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between ml-0 md:ml-8 lg:ml-0">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 text-white text-2xl">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <RxGithubLogo />
          </a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <RxLinkedinLogo />
          </a>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
