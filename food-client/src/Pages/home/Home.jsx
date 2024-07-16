import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testmonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories/>
      <SpecialDishes/>
      <Testmonials/>
    </div>
  )
}

export default Home
