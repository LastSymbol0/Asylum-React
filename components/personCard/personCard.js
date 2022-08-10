import styles from './personCard.module.scss'
import cn from 'classnames'

import Image from 'next/image'
import Icons from '../UI/icons/icons'
import sclogo from '../../pages-content/team/mainScreen/assets/SClogo.svg'

const Social = ({ social }) => {
  if (!social) {
    return <></>
  }
  return (
    <div className={styles.personCard__social}>
      {social.map((_, i) => (
        <a key={i} href={_.link} target='_blank' rel='noreferrer'>
          <svg
            className={styles.social__circle}
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='14' cy='14' r='13' fill='#161616' stroke='#BABABA' />
            <circle
              className={styles.circle_gradient}
              cx='14'
              cy='14'
              r='13'
              fill='#161616'
              stroke='url(#gradient)'
            />
            <defs>
              <linearGradient
                id='gradient'
                x1='-9.57669'
                y1='48.7259'
                x2='25.059'
                y2='-2.04514'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.246495' stopColor='#CC00FF' />
                <stop offset='1' stopColor='#50BFFF' />
              </linearGradient>
            </defs>
          </svg>
          <Icons className={styles.social__icon} label={_.name} />
        </a>
      ))}
    </div>
  )
}

const PersonCard = ({
  className,
  avatar,
  background,
  name,
  position,
  social,
  description,
  supercolonyMember,
  ...props
}) => {
  return (
    <div {...props} className={cn(styles.personCard, className)}>
      <div className={styles.personCard__avatar}>
        {background && (
          <div className={styles.avatar__background}>
            <Image src={background} alt='' />
          </div>
        )}
        <Image
          className={styles.avatar__image}
          priority={true}
          src={avatar}
          alt=''
        />
      </div>
      <div className={styles.personCard__titleBlock}>
        <p className={styles.personCard__title}>{name}</p>
        {supercolonyMember ? (
          <div className={styles.personCard__supercolonyLogo}>
            <Image layout='fill' src={sclogo} priority={true} alt='sc-logo' />
          </div>
        ) : null}
      </div>

      <p className={styles.personCard__position}>{position}</p>
      <Social social={social || null} />
      {description && (
        <p className={styles.personCard__description}>{description}</p>
      )}
    </div>
  )
}

export default PersonCard
