import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../src/components/Header'
import Button from '../src/components/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.textDiv}>
        <h1>Get the Job you really want</h1>
        <p>Discover your options with your personalized career search</p>
        <Link href='/test/jobs'><Button text='Start Now!' /></Link>
      </div>
    </div>
  )
}

export default Home
