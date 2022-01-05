import styles from './styles.module.scss'
import { Button } from './Button'

export function Footer() {
  return (
    <div className={styles.footer}>
      <h2>passive.</h2>
      <div className={styles.infoArea}>
        <div>
          <h2>Contact</h2>
          <a href="/">Ferneberga House</a>
          <a href="/">Alexandra Road</a>
          <a href="/">Farnborough</a>
          <a href="/">GU146QD</a>
        </div>

        <div>
          <h2>Connect</h2>
          <a href="/">hello@aassive</a>
          <a href="/">+44 (0)000 000 0000</a>
        </div>

        <div>
          <h2>Small Print</h2>
          <a href="/">Privacy aolicy</a>
          <a href="/">Terms &#38; Conditions</a>
          <a href="/">Hosting Terms &#38; Conditions</a>
          <a href="/">Website Terms &#38; Conditions</a>
          <a href="/">Manage Cookies</a>
        </div>

        <div className={styles.emailArea}>
          <p>Subscribe to our newsletter</p>
          <input type="email" placeholder="E-mail Address"/>
          <Button text="SUBSCRIBE" filled/>
        </div>

      </div>
    </div>
  )
}
