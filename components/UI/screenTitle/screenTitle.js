import styles from './screenTitle.module.scss'
import cn from 'classnames'

import Image from 'next/image'
import lineImage from './assets/line.png'

const ScreenTitle = ({ className, children, ...props }) => {
  return (
    <div {...props} className={cn(styles.screenTitle, className)}>
      <h2>{children}</h2>
      <div>
        <Image src={lineImage} />
      </div>
    </div>
  )
}

export default ScreenTitle
