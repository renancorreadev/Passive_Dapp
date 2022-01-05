import styles from './styles.module.scss'
import {Button} from './Button'

export function Banner(){

    return(
        <section className={styles.section}>

            <h1>Hold <span>Passive</span>, Earn USDT</h1>

            <h3>
            The Passive Protocol is a Community inspired DeFI <br /> Experiment
            built on Binance Smart Chain
            </h3>

            <p>
                Passive tokens are the keys to your share of USDT held in the vault. Claim USDT
            </p>

            <div>
                <Button text="BUY NOW" filled/>
                <Button text="CLAIM REWARDS" outlined/>
            </div>
        </section>
    )
}