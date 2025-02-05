'use client'
import { ProductInterface } from '@/types';
import styles from './ProductCard.module.scss';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RemoveFavorite, addToFavorites, isInFavorites } from '@/utils/localStorage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

interface Props {
    product: ProductInterface
}



const ProductCard:FC<Props> = ({ product }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const [animation, setAnimation] = useState(false);
    
 
    const toggleFavorite =() => {
        if(isInFavorites(product.ref)) {
            RemoveFavorite(product.ref)
        } else {
            addToFavorites(product.ref)
        }
        setIsFavorite(isInFavorites(product.ref));
    }

    const doubleClick = () => {
        if(isInFavorites(product.ref)) {

        } else {
            addToFavorites(product.ref)
        }
        setAnimation(true);
        setTimeout(()=>{
            setAnimation(false);
        },1000)
        setIsFavorite(isInFavorites(product.ref));
    }

    useEffect(()=>{
        if(product){
            setIsFavorite(isInFavorites(product.ref))
        }
    },[product])

    return (
        <div className={styles.card}>




            <div className={`${styles.containerImage} ${animation ? styles.animation:''}`} >
                <Link href={`/cuadros/${product.ref}-${product.title.replace(/ /g,"-")}`}>
                    <Swiper pagination={true} modules={[Pagination]} className={styles.slide} onDoubleClick={doubleClick} >
                        {
                            product.images.map((img,i)=>(
                                <SwiperSlide key={img.alt+i}>
                                    <Image src={img.url} alt={product.title} width={296} height={269} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className={styles.instagramHeart}></div>
                </Link>
            </div>


            <Link href={`/cuadros/${product.ref}-${product.title.replace(/ /g,"-")}`}>
                <div className={styles.title}>
                    <h3>{product.title}</h3>
                    <div className={styles.text}>
                        <small>{`ref ${product.ref} | ${product.type}`}</small>
                        <div style={{flexGrow:1}}></div>
                        <small>desde</small> &nbsp;
                        <strong>$45.000 COP</strong>
                    </div>
                </div>
            </Link>

            <div>
                <p>
                </p>
            </div>
        </div>
    )
}

export default ProductCard;