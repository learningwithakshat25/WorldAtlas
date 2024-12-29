import React from 'react'
import { useState } from 'react';

const Country = () => {
  const ageval = 13
  
  return (
    <div className='flex flex-row items-center justify-center m-10'>
      <h1>Test</h1>
      <button className='rounded-md bg-blue-600 text-white p-2 '>{ageval > 18 ? "Watch" : "Not Watch"}</button>
    </div>
  )
}

export default Country