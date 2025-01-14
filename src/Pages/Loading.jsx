import { Spinner } from 'flowbite-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 flex justify-center items-center'>
       <Spinner color="warning" aria-label="Warning spinner example" />
    </div>
  )
}

export default Loading
