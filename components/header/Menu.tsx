'use client'

import useCartService from '@/lib/hooks/useCartStore'
import useLayoutService from '@/lib/hooks/useLayout'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SearchBox } from './SearchBox'

const Menu = () => {
  const { items, init } = useCartService()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' })
    init()
  }

  const { data: session } = useSession()

  const { theme, toggleTheme } = useLayoutService()

  const handleClick = () => {
    ;(document.activeElement as HTMLElement).blur()
  }

  return (
    <>
      <div className="hidden sm:block">
        <SearchBox />
      </div>
      <div>
        <ul className="flex items-stretch">
          <li>
            <Link
              className="btn btn-ghost flex gap-3 items-gap-2 center self-stretch px-1.5 py-1 my-auto whitespace-nowrap bg-breadyellow rounded-xl"
              href="/cart"
            >
              <button className="self-stretch py-2 my-auto font-bold text-black rounded-xl w-[35px]">
                Cart
              </button>
              {mounted && items.length > 0 && (
                <div className="self-stretch px-2 py-1.5 my-auto font-extrabold text-center text-white bg-cartnumber rounded-lg min-h-[24px] w-[40px]">
                  {items.reduce((a, c) => a + c.qty, 0)}
                </div>
              )}
            </Link>
          </li>

          <li>
            <Link
              className="btn btn-ghost gap-2 self-stretch p-2 my-auto font-bold text-black rounded-btn"
              href="/faq"
            >
              FAQ
            </Link>
          </li>

          {session && session.user ? (
            <>
              <li>
                <div className="dropdown dropdown-bottom dropdown-end my-auto font-bold rounded-md">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost rounded-btn"
                  >
                    {session.user.name}
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 bg-[#feca6d] rounded-box w-52"
                  >
                    <li>
                      <Link href="/order-list">Order List</Link>
                    </li>
                    <li>
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={signoutHandler}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : (
            <li>
              <button
                className="btn btn-ghost bg-amber-200 rounded-btn"
                type="button"
              >
                Sign in
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Menu
