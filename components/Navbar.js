import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import {FaSearch, FaShoppingCart,} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

const Navbar = () => {

  return (
    <div className={styles.navContainer}>
     <div className={styles.navHeader}>
      <div className={styles.contentContainer}>
        <div className={styles.homeTitleLink}>
         <Link href="/"><a>Ephesus Clothing</a></Link>
        </div>
        <div className={styles.searchBarContainer}>
          <input type="text" /> <button>Search</button>
        </div>
        <div className={styles.headerRightIcons}>
          <ul>
            <li><CgProfile /></li>
            <li><Link href="/shoppingCart"><span><div className={styles.shoppingCartCount}>2</div><FaShoppingCart /></span></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className={styles.contentLinks}>
          <ul className={styles.ulForLinks}>
           <li>
            <Link href="/womens"><a>Women</a></Link>
           </li>
           <li>
            <Link href="/mens"><a>Men</a></Link>
           </li> 
           <li>
            <Link href="/kids"><a>Kids</a></Link>
           </li>
           <li>
            <Link href="/shoes"><a>Shoes</a></Link>
           </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar