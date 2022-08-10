import styles from './screenTitle.module.scss'
import cn from 'classnames'

import Image from 'next/image'
import lineImage from './assets/line.png'

const ScreenTitle = ({
  className,
  contentClassName,
  children,
  as = 'h2',
  ...props
}) => {
  const Tag = as
  return (
    <div {...props} className={cn(styles.screenTitle, className)}>
      <Tag className={contentClassName}>{children}</Tag>
      <div>
        <Image src={lineImage} />
      </div>
    </div>
  )
}

export default ScreenTitle
