
import React from 'react'

const FrontLayout = ({children,}: {children: React.ReactNode}) => {
  return (
    <main className="flex-grow container mx-auto px-4">{children}</main>
  )
}

export default FrontLayout