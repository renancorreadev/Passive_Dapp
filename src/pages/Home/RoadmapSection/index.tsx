import { QuarterObjective } from './QuarterObjective'
import styles from './styles.module.scss'

export function RoadmapSection(){

    return(
        <section className={styles.section} id="roadmapSection">
            <h1>OUR <span>ROADMAP</span></h1>
            <div>
                <div className={styles.quarter}>
                    <h4>Quarter 3 2021</h4>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                </div>

                <div className={styles.quarter}>
                    <h4>Quarter 3 2021</h4>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                </div>

                <div className={styles.quarter}>
                    <h4>Quarter 3 2021</h4>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                    <QuarterObjective text="Liquidity locked"/>
                </div>
            </div>
        </section>
    )
}