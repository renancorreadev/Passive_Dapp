import styles from './styles.module.scss'
import {Button} from './Button'
import { PassiveSwapLogo } from '../../../components/PassiveSwapLogo'

// exchange logos
import coinGeckoLogo from '@assets/Exchanges/coingecko.png'
import coinMarketCapLogo from '@assets/Exchanges/cmc.png'
import pancakeSwapLogo from '@assets/Exchanges/pancakeswap.png'
import dextLogo from '@assets/Exchanges/dextools.png'
import bscLogo from '@assets/Exchanges/bsc.png'
import { Link } from 'react-router-dom'

export function DexSection(){

    return(
        <section className={styles.section}>

            <span className={styles.customLogo}>
                <PassiveSwapLogo/>
            </span>

            <h2>PassiveSwap is Now Live</h2>

            <Link to="swap">
                <Button text="Start Swapping" filled/>
            </Link>

            <div className={styles.gridThreeCol}>
                <img src={coinGeckoLogo} alt="Coingecko" />
                <img src={coinMarketCapLogo} alt="Coin marketcap" />
                <img src={pancakeSwapLogo} alt="Pancake swap" />
            </div>
            <div className={styles.gridTwoCol}>
                <img src={dextLogo} alt="Dext" />
                <img src={bscLogo} alt="BscScan" />
            </div>
        </section>
    )
}