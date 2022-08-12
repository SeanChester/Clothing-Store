import styles from '../styles/HomeCard.module.css'
import img from '../public/images/backToSchool.png'
import Image from 'next/image'

const HomeCard = () => {
  return (
    <main>
        <Image src={img} alt="backToSchool" height='240' width='200'/>
    </main>
  )
}

export default HomeCard