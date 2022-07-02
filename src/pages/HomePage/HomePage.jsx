import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import NavBar from '../../components/NavBar/NavBar'

export default function HomePage() {
  return (
    <>
    <NavBar active={'home'}/>
    <Carousel />
    </>
  )
}
