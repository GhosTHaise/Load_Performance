"use client"
import Image from 'next/image'
import { Input } from '../ui/input'
import { useEffect, useState } from 'react';
import { formUrlQuery } from '@/sanity/utils';
import { useSearchParams , useRouter, usePathname } from 'next/navigation';

const SearchForm = () => {
    const [Search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    
    useEffect(() => {
      const delayDebounceFn = setTimeout(()=>{
        let newUrl = "";
        if(Search){
            newUrl = formUrlQuery(
                {
                    key : "query",
                    value : Search,
                    params : searchParams.toString()
                }
            )
        }else{
            newUrl = formUrlQuery({
                params : searchParams.toString(),
                keysToRemove : ['query']
            })
        }
        router.push(newUrl,{ scroll : false });
      },300);
      return () => clearTimeout(delayDebounceFn);
    }, [Search]);
    
  return (
    <form
        className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'
    >
        <label
            className='flex-center relative w-full max-w-3xl'
        >
            <Image
                src="/magnifying-glass.svg"
                alt='search icon'
                className='absolute left-8'
                width={32}
                height={32}
            />
            <Input
                type='text'
                placeholder='Search'
                className='base-regular h-fit border-0 bg-black-400 
                py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0'
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </label>
    </form>
  )
}

export default SearchForm