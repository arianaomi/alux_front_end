// scss
import styles from './CardsWelcome.module.scss'
function CardsWelcome({ image1, image2, text }) {
  return (
    <div className={styles.wrapperCard}>
      <div className={styles.wrapperImg}>
        <img src={image1} className={styles.image1} />
        <img src={image2} className={styles.image2} />
      </div>
      <div className={styles.cover}></div>
      <div className={styles.coverText}>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default CardsWelcome
