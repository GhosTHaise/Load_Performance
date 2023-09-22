import Image from 'next/image'
import React from 'react'

const SearchForm = () => {
  return (
    <form>
        <label>
            <Image
                src="/magnifying-glass.svg"
                alt='search'
                className='absolute  left-8'
                width={32}
                height={32}
            />
        </label>
    </form>
  )
}

export default SearchForm