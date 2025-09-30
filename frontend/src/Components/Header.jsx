import React from 'react'
import { ShoppingCartState } from '../Context/Context';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
motion
    const {state:{cart}}=ShoppingCartState();

  return (
    <nav className='h-fit flex items-center justify-between bg-yellow-700 p-2'>
    <Link to={'/'}>

    <motion.h2  whileHover={{scale:1.02}} className='text-2xl font-mono text-white'>

        Shop Here
    </motion.h2>
    </Link>
    <div className='flex justify-center items-center'>
    </div>
    <Link to={'/cart'}>
        <button className='px-2 py-2 text-white'>
            Cart ({cart?.length})
        </button>
    </Link>
    </nav>
  )
}

export default Header