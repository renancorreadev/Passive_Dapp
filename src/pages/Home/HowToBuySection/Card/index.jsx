import styles from './styles.module.scss'

export function Card({logo, text, title}){

    return(
        <div className={styles.card}>
            <div className={styles.cardLogo}>
                <img src={logo} alt="" />
            </div>
            <div>
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}