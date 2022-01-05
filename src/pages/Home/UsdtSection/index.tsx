import tetherLogo from '@assets/tether.svg'
import styles from './styles.module.scss'

export function UsdtSection(){

    return(
        <section className={styles.section}>
            <img src={tetherLogo} alt="tether logo" />
            <h1>1032</h1>
            <h2>USDT Rewards</h2>
            <p className={styles.gradientText}>Generated For Holders</p>
            <p>$4,652,715.755</p>
        </section>
    )
}