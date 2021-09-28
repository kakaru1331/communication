import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const handleClick = () => {
    fetch('http://210.220.167.89:3001')
      .then(res => console.log(res))
      .catch(error => console.error(error))
  }

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>
          request
      </button>
    </div>
  )
}

export default Home
