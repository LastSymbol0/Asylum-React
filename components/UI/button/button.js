import styles from './button.module.scss'
import cn from 'classnames'

const types = {
  big: styles.buttonBig,
  small: styles.buttonSmall,
  tab: styles.buttonTab,
}

const isActive = {
  true: styles.active,
  false: '',
}

const buttonOutlineGradient = 'outlineGradient'
const ButtonOutlineGradient = ({
  className,
  type,
  active,
  children,
  link,
  ...props
}) => {
  type = type || types.small
  active = active || isActive.false
  if (link) {
    return (
      <div
        {...props}
        className={cn(
          styles.button,
          styles.buttonOutline,
          className,
          types[type],
          isActive[active]
        )}
      >
        <a href={link || '#'} target='_blank' rel='noreferrer' type='button'>
          {children}
        </a>
      </div>
    )
  }
  return (
    <div
      {...props}
      className={cn(
        styles.button,
        styles.buttonOutline,
        className,
        types[type],
        isActive[active]
      )}
    >
      <button type='button'>{children}</button>
    </div>
  )
}

const Button = ({ label, ...props }) => {
  switch (label) {
    case buttonOutlineGradient:
      return <ButtonOutlineGradient {...props} />
    default:
      console.warn(`Button: No button with label ${label} found`)
      return <></>
  }
}

export default Button
