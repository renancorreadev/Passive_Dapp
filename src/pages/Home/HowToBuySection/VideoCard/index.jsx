import styles from './styles.module.scss'

export function VideoCard(props){

    return(
        <div className={styles.video}>
            {props.children}
        </div>
    )
}