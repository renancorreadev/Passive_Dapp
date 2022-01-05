import dashboardPrintLogo from '@assets/ourRoadmap/dashboard-print.png'
import ethereumLogo from '@assets/howToBuy/ethereum.png'
import metamaskLogo from '@assets/howToBuy/metamask.png'
import pancakeLogo from '@assets/howToBuy/pancake.png'
import passiveLogo from '@assets/howToBuy/passive.png'

import { Button } from './Button'
import { Card } from './Card'
import styles from './styles.module.scss'
import { VideoCard } from './VideoCard'

export function HowToBuySection(){

    return(
        <section className={styles.section} id="howToBuySection">
            <div className={styles.printArea}>
                <img src={dashboardPrintLogo} alt="" />
                
                <div>
                    <h2>Easy to use Dashboard.<br/>
                        to view and claim
                        USDT earnings.
                    </h2>

                    <p>
                        Connect your wallet and seamlessly claim your rewards.
                    </p>
                    <Button text="VIEW DASHBOARD" filled/>
                </div>

            </div>
            <h1>How To Buy</h1>

            <div className={styles.cardArea}>

                <VideoCard>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TDGq4aeevgY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoCard>

                <VideoCard>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TDGq4aeevgY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoCard>

                <Card logo={metamaskLogo} 
                
                title="Download &#38; setup MetaMask or TrustWallet" 
                
                text="
                    Download MetaMask (a crypto wallet in form
                    of a browser extension) or TrustWallet (an
                    app for your phone). Make sure you are
                    connected to Ethereum MainNet. 
                "/>

                <Card logo={ethereumLogo} 
                
                title="Download &#38; setup MetaMask or TrustWallet" 
                
                text="
                    Download MetaMask (a crypto wallet in form
                    of a browser extension) or TrustWallet (an
                    app for your phone). Make sure you are
                    connected to Ethereum MainNet. 
                "/>

                <Card logo={pancakeLogo} 
                
                title="Download &#38; setup MetaMask or TrustWallet" 
                
                text="
                    Download MetaMask (a crypto wallet in form
                    of a browser extension) or TrustWallet (an
                    app for your phone). Make sure you are
                    connected to Ethereum MainNet. 
                "/>

                <Card logo={passiveLogo} 
                
                title="Download &#38; setup MetaMask or TrustWallet" 
                
                text="
                    Download MetaMask (a crypto wallet in form
                    of a browser extension) or TrustWallet (an
                    app for your phone). Make sure you are
                    connected to Ethereum MainNet. 
                "/>
            </div>
        </section>
    )
}