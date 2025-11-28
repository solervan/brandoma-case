
import './Button.scss'
import type { buttonProps } from './model/button.type'


export default function Button({textButton}:buttonProps) {
  return (
    <>
        <button type="button">{textButton}</button>
    </>
  )
}
