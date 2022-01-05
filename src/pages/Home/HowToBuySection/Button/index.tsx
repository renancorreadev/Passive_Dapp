import styles from './styles.module.scss'

interface ButtonProps{
    text: string
    filled?: boolean
    outlined?: boolean
}

export function Button({text, filled, outlined}: ButtonProps){

    return (
        <button 
        className={filled ? styles.filled : styles.outlined}>
            {text}
        </button>
    )
}