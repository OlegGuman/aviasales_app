import styles from './checkbox.module.scss'

export function CheckBox(props) {
  const { id } = props

  function handlerClick(e) {
    console.log(e.target)
  }
  return (
    <>
      <input onClick={handlerClick} id={id} className={styles.input_checkbox} type="checkbox" />
    </>
  )
}
