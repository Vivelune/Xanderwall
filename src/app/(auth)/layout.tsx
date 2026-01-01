import React, { ReactNode } from 'react'

type Props = {
    children: React.ReactNode
}

export default function Layout( {children}: 
  {
    children: ReactNode
  }
) {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        {children}
    </div>
  )
} 