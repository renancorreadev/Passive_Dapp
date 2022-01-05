import markerImg from '@assets/ourRoadmap/marker.png'
import styles from './styles.module.scss'

export function QuarterObjective({text}){

    return(
        <p className={styles.objective}>
            <img src={markerImg} alt="" />
            {text}
        </p>
    )
}