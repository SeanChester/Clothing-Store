import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.navHeader}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
    </div>
  )
}

export default Navbar