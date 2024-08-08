import React from 'react'
import styles from './NotFounderBlock.module.scss'

export const NotFounderBlock = () => {
  return (
    <div className={styles.root}>
      <h1 >
      <span>😕</span>
      <br/>
      Нечего не найдено
      </h1>

      <p className={styles.description}>
        К сожелению данная страница отсутствует в нашем интернет магазине
      </p>
    </div>
  )

}

export default NotFounderBlock;
