'use client'
import { FC, useEffect, useState } from 'react';
import styles from './ImageSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import ArrowBack from '@/components/icons/ArrowBackIcon';
import { useRouter } from 'next/navigation';
import { FavoriteIcon, SharedIcon } from '@/components/icons';
import { RemoveFavorite, addToFavorites, isInFavorites } from '@/utils/localStorage';


interface Props {
    images: {
        url:string,
        alt:string
    }[]
    reff:string
    title:string
}

const ImageSlider:FC<Props> = ({ images, reff, title }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();
    

    const toggleFavorite = () => {
        if(isInFavorites(reff)) {
            RemoveFavorite(reff);
            setIsFavorite(false)
        } else {
            addToFavorites(reff);
            setIsFavorite(true)
        }
    }

    useEffect(()=>{
        setIsFavorite(isInFavorites(reff))
    },[reff])

    return (
        <div className={styles.imageSlider}>

            <Swiper pagination={{type:'bullets'}} modules={[Pagination, Navigation]} className={styles.slide} spaceBetween={15}>
                {
                    images.map((img,i)=>(
                        <SwiperSlide key={img.url}>
                            <Image src={img.url} fill alt={img.alt}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            
            <button className={styles.back} onClick={()=>router.back()}>
                <ArrowBack width={20}/>
            </button>
            
            <button className={`${styles.favorite} ${ isFavorite ? styles.active : '' }`} onClick={toggleFavorite}>
                <FavoriteIcon width={20}/>
            </button>
            
            <button onClick={()=>navigator.share({title:title, url:`https://canaima.store/cuadro/${reff}`})} className={styles.share}>

                <SharedIcon width={20}/>
                
            </button>

        </div>
    )
}


export default ImageSlider