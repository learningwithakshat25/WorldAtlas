import React from 'react'

const Contact = () => {
  const handleFormSubmit = (formData) =>{
    // console.log(formData.entries());    
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    
  }

  return (
    <div className='contact-section flex gap-4 m-10'>
      <form action={handleFormSubmit} className='flex flex-col gap-8 container mx-auto p-2 px-6 text-center md:max-w-lg text-white'>
      <h1 className='text-3xl md:text-4xl font-semibold text-white'>Contact Us</h1>
      <div className="main-contact flex flex-col gap-4">
        <input className='w-full p-2 border bg-black placeholder:text-stone-300 border-stone-400 rounded-md' type="text" placeholder='Enter your Name' name='username' required autoComplete='false' />
        <input className='w-full p-2 border bg-black placeholder:text-stone-300 border-stone-400 rounded-md' type="email" placeholder='Enter Your Email' name='email' required autoComplete='false' />
        <textarea className='w-full p-2 border bg-black placeholder:text-stone-300 border-stone-400 rounded-md' placeholder='Enter Your Message' name='message' required autoComplete='false'></textarea>
        <button type='submit' value='send' className='w-full p-2 border bg-black text-white text-md md:text-xl border-stone-400 rounded-md'>SEND</button>
      </div>
      </form>
    </div>
  )
}

export default Contact