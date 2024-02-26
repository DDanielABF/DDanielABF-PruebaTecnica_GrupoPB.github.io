import React from 'react'
import './styles/Navbar.css'

export default function Navbar() {

  return (
    <>
      <div className='navbar'>
          <div className='image'>
            <img src="./public/logonav.png" alt="" />
            
          </div>
          <div className='title'>
            <a><p></p></a>
          </div>
          <div className='doc'>
            <a href='https://es.legacy.reactjs.org/docs/getting-started.html'><p>React.js</p></a>
          </div>
          <div className='doc'>
            <a href='https://vitejs.dev/guide/'><p>Vite.js</p></a>
          </div>
          <div className='doc'>
            <a href='https://nextjs.org/'><p>Next.js</p></a>
          </div>
          <div className='doc'>
            <a href='https://tailwindcss.com/'><p>Tailwind.js</p></a>
          </div>
          
      </div>
    </>
  )
}

