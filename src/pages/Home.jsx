import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import React from 'react'
import { motion } from 'framer-motion'

const home = () => {
  return (
    <div
    optimal={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>

      <Veggie/>
      <Popular/>
    </div>
  )
}

export default home
