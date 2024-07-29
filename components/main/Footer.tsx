import React from 'react'

const Footer = () => {
  const { NEXT_PUBLIC_APP_NAME: appName } = process.env

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-10">
      <div className="mb-[20px] text-[15px] text-center">
        &copy; {appName} 2024 Inc. All rights reserved
      </div>
    </div>
  )
}

export default Footer
