// SCSS
import styles from './Btn.module.scss'
import cx from 'classnames'
//ant-design
import { Button } from 'antd'

function Btn({ content, color }) {
  let btn_style = color
  console.log(btn_style)
  return (
    <>
      <h1>Button</h1>
      <Button className={cx(styles.btn, styles.btn_style)}>{content}</Button>
    </>
  )
}

export default Btn
