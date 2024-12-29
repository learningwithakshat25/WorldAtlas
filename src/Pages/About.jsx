import React from 'react'
import CountryFacts from '../Api/countryData.json'

const About = () => {
  return (
    <div className='container m-auto text-white flex flex-col gap-12 items-center justify-center p-4'>
      <div className="about-heading flex items-center justify-center text-center">
        <h1 className='text-3xl font-semibold'>Here are the Intresting Facts we're proud of</h1>
      </div>
      <div className="container mx-auto card-child flex flex-wrap gap-4 justify-center items-center ">
        {
          CountryFacts.map((country) => {
            const { id, countryName, capital, population, interestingFact } = country
            return (
              <div className="cards border border-stone-400 rounded-md p-8 flex flex-col items-start gap-1 w-64 h-64 " key={id}>
                <h1 className='text-2xl font-semibold'>{countryName}</h1>
                <p>
                  <span className='text-stone-400'>Capital:</span>
                  <span>{capital}</span>
                </p>
                <p>
                  <span className='text-stone-400'>Population:</span>
                  <span>{population}</span>
                </p>
                <p>
                  <span className='text-stone-400'>intrestingFact:</span>
                  <span>{interestingFact}</span>
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default About