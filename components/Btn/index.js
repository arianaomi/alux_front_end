// SCSS
import styles from './Btn.module.scss'
import cx from 'classnames'

function Btn ({ content, color }) {
  return (
    <>
      <h1>Button</h1>
      <button className={cx(styles.btn, styles.btn_primary)}>{color}</button>
    </>
  )
}

export default Btn
