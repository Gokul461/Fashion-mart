import React from 'react'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import Hero from '../components/hero/hero'
import NewsLetter from '../components/newsletter/NewsLetter'
import NewCollections from '../components/collections/NewCollections'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
