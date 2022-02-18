import Image from 'next/image'
import bgImage from '../images/Vectorlanding.png'
import styles from '../styles/Home.module.css'


export default function HeroSection(){
    return (
        <main>
            <br/>
            <br/>
            <br/>
            <Image
            src={bgImage}
            className={styles.heroImage}
            // width='100%'
            // height={500}  
            />
        </main>
    )

}