import React from 'react'
import "./home.css"
import Hero from '../../components/hero/Hero'
import Category_card from '../../components/category_card/Category_card'
import Trending from '../../components/tending/Trending'
import Testimony from '../../components/testimony/Testimony'
import Choice from '../../components/choice/Choice'
import News from '../../components/news/News'
import Assure from '../../components/assure/Assure'

const Home = () => {
    
  
  return (
    <div className='home_body'>
     <Hero />
     <Category_card />
     <Trending  />
     <Testimony />
     <Choice />
     <News />
     <Assure />
    </div>
  )
}

export default Home
