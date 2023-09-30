import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

type Props = {}

function loading({}: Props) {
  return (
    <main
      className="flex-center paddings mx-auto w-auto max-w-screen-2xl"
    >
      <section
        className="nav-padding w-full"
      >
        <Skeleton className="w-full h-[274px] rounded-lg" />
      </section>
      <section
        className="mt-6 flex w-full flex-col sm:mt-20"
      >
        <Skeleton className="h-10 w-56" />
        <div
          className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start"
        >
          <Skeleton className="h-[440px] w-full sm:w-[356px]" />
          <Skeleton className="h-[440px] w-full sm:w-[356px]" />
          <Skeleton className="h-[440px] w-full sm:w-[356px]" />
        </div>
      </section>
    </main>
  )
}

export default loading