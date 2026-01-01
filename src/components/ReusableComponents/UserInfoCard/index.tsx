import { Attendee } from '@/generated/prisma/client'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
customer: Attendee
tags: string[]
className?: string

}

const  UserInfoCard = ({customer, tags, className}: Props) => {
  return (
    <div className={cn('flex flex-col text-primary w-fit p-3 pr-10 gap-3 rounded-xl border-[0.5px] border-border backdrop-blur-[20px] bg-background/10' , className)}>
        <h3 className='font-semibold text-xs'>
            {customer.name}
        </h3>
        <p className='text-sm'>
            {customer.email}
        </p>
        {
            tags.map((tag, index)=>(
                <span key={index} className='text-foreground px-3 py-1 rounded-md
                border border-border'>
                    {tag}
                </span>
            ))
        }
         </div>
  )
}

export default  UserInfoCard