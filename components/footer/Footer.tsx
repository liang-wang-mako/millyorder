import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-center px-16 py-10 mt-10 w-full text-sm text-black bg-breadorange max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex w-full bg-black min-h-[1px] max-md:max-w-full" />
        <div className="flex justify-center mt-8 w-full max-md:max-w-full">
          © 2024 Milly Systems Ltd All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
