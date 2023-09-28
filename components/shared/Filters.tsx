"use client"
import { formUrlQuery } from '@/sanity/utils';
import React, { useState } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
const links = [
    "all",
    "next 13",
    "frontend",
    "backend",
    "fullstack"
]
const Filters = () => {
    const searchParams = useSearchParams();
    const router  = useRouter();
    const [active, setActive] = useState("");
    let newUrl = "";

    const handleFilter = (link : string) => {
        if(active === link){
            setActive('');

            newUrl = formUrlQuery({
                params : searchParams.toString(),
                keysToRemove : ["category"],
                value : null
            });
        }else{
            setActive(link);

            newUrl = formUrlQuery({
                params : searchParams.toString(),
                key : "category",
                value : link.toLowerCase()
            });
        }

        router.push(newUrl,{scroll : false})
    }
  return (
    <ul
        className="text-white-800 body-text no-scrollbar flex 
            w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl
        "
    >
        {
            links.map((link) => (
                <button
                    key={link}
                    className={`${active == link  && "gradient_blue-purple"} 
                    whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
                    onClick={() => handleFilter(link)}
                >
                    {link}
                </button>
            ))
        }
    </ul>
  )
}

export default Filters