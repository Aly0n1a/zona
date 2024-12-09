import React from 'react'
import s from './Zona.module.scss'

const Zona = () => {
  return (
    <>
    <div className={s.zona}>
        <div className="container">
            <h1 className={s.wrap}>ЗОНА</h1>
            <p>ХАРАКТЕРИСТИКИ</p>
            <div className={s.cards}>
                <div className={s.card}>
                    <p className={s.text1}>процессор</p>
                    <p className={s.text2}>AMD Ryzen 7 2700X</p>
                    <img src="/card1.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Zona