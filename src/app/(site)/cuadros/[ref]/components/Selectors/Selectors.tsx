'use client'

import { FC, useEffect, useRef, useState } from 'react';
import styles from './Selectors.module.scss';
import {  isInFavorites } from '@/utils/localStorage';
import { WhatsappIcon } from '@/components/icons';


const getPrice = (size:string) => {
    switch (size) {
        case '45x35cm':
            return '$45.000 COP'
        case '60x45cm':
            return '$60.000 COP'
        case '80x60cm':
            return '$99.000 COP'
        case '100x75cm':
            return '$125.000 COP'
    
        default:
            return '$45.000 COP';
    }
}

interface Props {
    reff: string
}

const Selectors:FC<Props> = ({ reff }) => {

    const [option, setOption] = useState('45x35cm');
    const [isFavorite, setIsFavorite] = useState(false)
    useEffect(()=>{
        setIsFavorite(isInFavorites(reff))
    },[reff])
    const linkWhatsapp = () => {
        const link = `https://wa.me/573137082992?text=Hola,%20quisiera%20comprar%20el%20cuadro:%0ARef:%20${reff}%0ATamaño:%20${option}%0ALink:%20https://deco-store.vercel.app/cuadros/${reff}`;
        window.open(link, '_blank')
    }


    return (
        <div className={styles.selectors}>
            <h2>Tamaño</h2>
            <div className={styles.options}>
                
                <button 
                    className={option==='45x35cm' ? styles.active : ''}
                    onClick={()=>setOption('45x35cm')}
                > 45x35cm </button>
                <button 
                    className={option==='60x45cm' ? styles.active : ''}
                    onClick={()=>setOption('60x45cm')}
                > 60x45cm </button>
                <button 
                    className={option==='80x60cm' ? styles.active : ''}
                    onClick={()=>setOption('80x60cm')}
                > 80x60cm </button>
                <button 
                    className={option==='100x75cm' ? styles.active : ''}
                    onClick={()=>setOption('100x75cm')}
                > 100x75cm </button>
            </div>

            <div className={styles.float}>
                <div>
                    <strong>
                        {getPrice(option)}
                    </strong>
                    <small>{`Tamaño: ${option}`}</small>
                </div>
                <button onClick={linkWhatsapp}>
                    <WhatsappIcon width={23}/>
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    )
}

export default Selectors;