import Arrival from '@/Components/Arrival/page'
import Exculsive from '@/Components/Exclusive/page'
import Feature from '@/Components/Featured/page'
import Footer from '@/Components/Footer/page'
import Heropage from '@/Components/Heropage/page'
import Navbar from '@/Components/Navbar/page'
import Cast from '@/Components/cast/page'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Heropage/>
      <Feature/>
      <Arrival/>
      <Exculsive/>
      <Cast/>
      <Footer/>
    </div>
  )
}

