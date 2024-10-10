
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 boder-solid border-dark font-medium text-lg dark:text-light dark:border-light text-dark'>
        
      <Layout className="py-8 flex items-center justify-center ">
        <span className='text-center'> 
            {new Date().getFullYear()} &copy; - Mohamed Ali Youssouf <br /> All Rights Reserved
        </span>
       

      </Layout>
    </footer>
  )
}

export default Footer
