import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { SearchBox } from './SearchBox'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-breadorange">
          <Link
            href="/"
            className="btn btn-ghost bg-logobg font-karantina font-bold text-breadyellow text-2xl"
          >
            Milly
          </Link>
          <Menu />
        </div>
        <div className="bg-breadorange block sm:hidden text-center pb-3">
          <SearchBox />
        </div>
      </nav>
    </header>
  )
}

export default Header
