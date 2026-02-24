import React from 'react'
import Carrossel from '../components/Carrossel'
import GranjaCards from '../components/Card'

const Home = () => {
  return (
    <main className="flex-grow-1">
      <Carrossel />
      <GranjaCards/>
    </main>
  )
}

export default Home