import React from 'react'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquarere } from 'react-icons/bs'

// link
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    // <nav className="flex bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden iz-50">
      <div className="container mx-auto"></div>
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[96px] blackdrop-blur-2xl>

      <Link>
        <BiHomeAlt />
      </Link>
      </div>
    </nav>
  )
}

export default Nav
