import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testmonials from './Testimonials'
import OurServices from './OurServices'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories/>
      <SpecialDishes/>
      <Testmonials/>
      <OurServices/>
    </div>
  )
}

export default Home
