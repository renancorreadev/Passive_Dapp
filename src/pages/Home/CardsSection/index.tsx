import styles from './styles.module.scss'

export function CardsSection(){

    return(
        <section className={styles.section}  id="cardsSection">

            <h1>Realistic Vision, Exciting Features</h1>

            <p id="p1">The Ethereum network already facilitates countless projects with real world applications, further fostering
                innovation and adoption. Because of this, we believe that Ether is significantly undervalued, So PassiveSwap
                holders are rewarded with Ether reflections.
            </p>

            <p className={styles.textBold}>
                It is our goal to offer interest earning DeFi options to Passive holders by leveraging established
                lending platforms – to earn interest on the Ether reflected into the Vault.
            </p>

            <div className={styles.cards}>

                {/* Card 1 */}
                <div className={styles.card}>
                    <h4>
                        10% Eth Reflections
                        deposited into the Passive
                        Vault
                    </h4>
                    <p>
                        10% of every buy/sell is deposited
                        into the Passive Vault ready to be
                        redistributed and claimed by
                        Passive holders who earn &#38; claim
                        Eth.
                    </p>
                </div>

                {/* Card 2 */}
                <div className={styles.card}>
                    <h4>
                    Unique Anti-Dump ‘Time locked wallet mechanism’
                    </h4>
                    <p>
                        All sales are limited to an aggregate
                        summation of ≤ 0.2% of the total
                        supply per wallet, every 24 hours.
                        This is designed to hopefully
                        mitigate volatility, limit large volume
                        swing trading and whale
                        manipulation.
                    </p>
                </div>

                {/* Card 3 */}
                <div className={styles.card}>
                    <h4>
                        Claim &#38; or Re-invest
                    </h4>
                    <p>
                        Passive holders have the
                        opportunity to either claim their Eth
                        or claim and re-invest into Passive
                        at a 10% discount.
                    </p>
                </div>
                
            </div>

            <p className={styles.textSmall}>
                A transaction contribution of 1% is added towards furthering the development & maintanence of the project long into the future.
            </p>
            
        </section>
    )
}