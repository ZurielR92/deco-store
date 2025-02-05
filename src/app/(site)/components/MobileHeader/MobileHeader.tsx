'use client'
import Image from 'next/image';
import styles from './MobileHeader.module.scss'
import Link from 'next/link';
import { CartIcon, FavoriteIcon, SupportIcon } from '@/components/icons';
import { SearchBar } from './components/SearchBar';
import CanaimaIcon from '@/components/icons/CanaimaIcon';
import { useRouter, useSearchParams } from 'next/navigation';

const SiteHeader = () => {


    const searchParams = useSearchParams();
    const router = useRouter();

    const category = searchParams.get('categoria')

    return (
        <>
        <header className={styles.siteHeader}>
            <div className={styles.container}>
                <Link href={'/'} className={styles.logo}>
                    <Image src={'/log-canaima.png'} width={156} height={40} alt=''/>
                </Link>
                <SearchBar/>
                <div className={styles.nav}>
                    <button><FavoriteIcon width={23}/></button>
                    <button><CartIcon width={23}/></button>
                    <button><SupportIcon width={23}/></button>
                </div>
            </div>
        </header>
        <div className={styles.categories}>
            <div className={styles.container}>




            <button 
                    className={category === '' || category === null || category=== undefined ? styles.active:''}
                    onClick={()=>router.push(`/tienda`)}
                >Todos</button>

                <button 
                    className={category === 'Animales' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Animales`)}
                >Animales</button>

                <button 
                    className={category === 'Deportes' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Deportes`)}
                >Deportes</button>

                <button 
                    className={category === 'Paisajes' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Paisajes`)}
                >Paisajes</button>

                <button 
                    className={category === 'Video Juegos' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Video Juegos`)}
                >Video Juegos</button>

                <button 
                    className={category === 'Anime' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Anime`)}
                >Anime</button>

                <button 
                    className={category === 'Bodegones' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Bodegones`)}
                >Bodegones</button>

                <button 
                    className={category === 'Infantiles' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Infantiles`)}
                >Infantiles</button>

                <button 
                    className={category === 'Musica' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Musica`)}
                >Música</button>

                <button 
                    className={category === 'Series y Television' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Series y Television`)}
                >Series y Television</button>

                <button 
                    className={category === 'Frases' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Frases`)}
                >Frases</button>

                <button 
                    className={category === 'Esculturas' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Esculturas`)}
                >Esculturas</button>

                <button 
                    className={category === 'Naturaleza' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Naturaleza`)}
                >Naturaleza</button>

                <button 
                    className={category === 'Dinero' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Dinero`)}
                >Dinero</button>

                <button 
                    className={category === 'Pinturas' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Pinturas`)}
                >Pinturas</button>

                <button 
                    className={category === 'Religiosos' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Religiosos`)}
                >Religiosos</button>

                <button 
                    className={category === 'Romanticos' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Romanticos`)}
                >Romanticos</button>

                <button 
                    className={category === 'Cocina' ? styles.active:''}
                    onClick={()=>router.push(`/tienda?categoria=Cocina`)}
                >Cocina</button>



            </div>
        </div>
        </>
    )
}

export default SiteHeader;