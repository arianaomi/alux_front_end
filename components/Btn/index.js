// SCSS
import styles from './Btn.module.scss'
import cx from 'classnames'

function Btn({ content, classProp = "btn_primary" }) {

  return (
    <>
      <h1>Button</h1>
      {/* <button className={cx(styles.btn, { styles[classProp] })}>{content}</button> */}
      <button className={`${styles.btn} ${styles[classProp]}`}>{content}</button>
    </>
  )
}

export default Btn
