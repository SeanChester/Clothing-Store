import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className={styles.navHeader}>
      <div className={styles.contentContainer}>
        <div className={styles.contentLinks}>
          <ul className={styles.ulForLinks}>
           <li>
            <Link href="/mens"><a>Men</a></Link>
           </li> 
           <li>
            <Link href="/womens"><a>Women</a></Link>
           </li>
           <li>
            <Link href="/kids"><a>Kids</a></Link>
           </li>
          </ul>
        </div>
        <div className={styles.homeTitleLink}>
         <Link href="/"><a>Home</a></Link>
        </div>
        <div className={styles.headerRightIcons}>
           <FaSearch className={styles.faSearchIcon}/>
           <Link href="/about"><a>About</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar