import { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import {FaSearch, FaShoppingCart,} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);

  const renderSearchBar = () => {
    setSearchBar(true)
  }
  return (
    <div className={styles.navHeader}>
      <div className={styles.contentContainer}>
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
        <div className={styles.homeTitleLink}>
         <Link href="/"><a>Ephesus Clothing</a></Link>
        </div>
        <div className={styles.headerRightIcons}>
          <ul>
            {searchBar && (<div>
              <input type="text" /> <button>Search</button>
            </div>
            )}
            {searchBar ? <div></div> : <li onClick={renderSearchBar}><FaSearch className={styles.faSearchIcon}/></li> }
            <li><CgProfile /></li>
            <li><div className={styles.shoppingCartCount}>2</div><FaShoppingCart /></li>
            <li><Link href="/about"><a>About</a></Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar