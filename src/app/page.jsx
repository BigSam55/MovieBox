import Arrival from '@/Components/Arrival/page'
import Feature from '@/Components/Featured/page'
import Heropage from '@/Components/Heropage/page'
import Navbar from '@/Components/Navbar/page'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Heropage/>
      <Feature/>
      <Arrival/>
    </div>
  )
}

