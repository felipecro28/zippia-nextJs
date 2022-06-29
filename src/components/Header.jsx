import style from '../../styles/Header.module.css'
import Link from 'next/link'

import React from 'react'

export default function Header() {
  return (
    <header className={style.header}>
        <Link href='/'><img src="https://static.zippia.com/ui-router/images/header/logo_white.svg" alt="zippia logo" /></Link>
        <p>JOBS</p>
        <p>CAREERS</p>
    </header>
  )
}
