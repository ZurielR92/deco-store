'use client'
import { FC, useContext, useEffect } from 'react';
import styles from './SearchModal.module.scss';
import { UIContext } from '@/context';
import { CancelIcon, SearchIcon } from '@/components/icons';
import ArrowBack from '@/components/icons/ArrowBackIcon';
import { useForm } from 'react-hook-form';
import { set } from 'mongoose';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface DataForm {
    search: string
}

const SearchModal:FC = () => {

    const router = useRouter();
    const { register, handleSubmit, setFocus } = useForm<DataForm>();
    const { isShowSearch, hideSearch } = useContext(UIContext);


    const customHandleSubmit = (data:DataForm) => {
        if( data.search !== '' ){
            router.push(`/tienda?busqueda=${data.search}`)
            hideSearch();
        }
    }

    useEffect(()=>{
        if(isShowSearch) {
            setTimeout(()=>setFocus('search'),100)
        }
    },[isShowSearch, setFocus])

    return (
        <section className={`${styles.searchModal} ${ isShowSearch ? styles.show : styles.hide}`}>
            <div className={styles.header}>

                <button onClick={hideSearch}>
                    <ArrowBack width={25}/>
                </button>

                <form onSubmit={handleSubmit(customHandleSubmit)}>
                    <input type="search" {...register('search')}/>
                    <button className={styles.float}>
                        <SearchIcon width={25}/>
                    </button>
                </form>
            </div>

            <div className={styles.section}>
                <span>Busquedas Populares</span>
                <ul className={styles.tags}>
                    <li><Link href={'/'}>
                        <button>
                            Bodegones        
                        </button>
                    </Link></li> 
                    <li><Link href={'/'}>
                        <button>
                            Bodegones        
                        </button>
                    </Link></li> 
                    <li><Link href={'/'}>
                        <button>
                            Bodegones        
                        </button>
                    </Link></li> 
                    <li><Link href={'/'}>
                        <button>
                            Bodegones        
                        </button>
                    </Link></li> 
                    <li><Link href={'/'}>
                        <button>
                            Bodegones        
                        </button>
                    </Link></li> 
                </ul>
            </div>

            <div className={styles.categories}>
                <span>Categorias</span>
                <ul>
                    <li><Link href={'/tienda?busqueda=animales'}>
                        <button onClick={hideSearch}> <Image src={'/icons/animales-icon.png'} width={20} height={20} alt=''/>Animales</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=bodegones'}>
                        <button onClick={hideSearch}> <Image src={'/icons/abstractos-icon.png'} width={20} height={20} alt=''/>Abstractos</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=anime'}>
                        <button onClick={hideSearch}> <Image src={'/icons/anime-icon.png'} width={20} height={20} alt=''/>Animé</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=bodegones'}>
                        <button onClick={hideSearch}> <Image src={'/icons/bodegones-icon.png'} width={20} height={20} alt=''/>Bodegones</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=ciudades'}>
                        <button onClick={hideSearch}> <Image src={'/icons/ciudades-icon.png'} width={20} height={20} alt=''/>Ciudades</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=flores'}>
                        <button onClick={hideSearch}> <Image src={'/icons/flores-icon.png'} width={20} height={20} alt=''/>Flores</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=gatos'}>
                        <button onClick={hideSearch}> <Image src={'/icons/gatos-icon.png'} width={20} height={20} alt=''/>Gatos</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=musica'}>
                        <button onClick={hideSearch}> <Image src={'/icons/musica-icon.png'} width={20} height={20} alt=''/>Musica</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=naturaleza'}>
                        <button onClick={hideSearch}> <Image src={'/icons/naturaleza-icon.png'} width={20} height={20} alt=''/>Naturaleza</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=paisajes'}>
                        <button onClick={hideSearch}> <Image src={'/icons/paisajes-icon.png'} width={20} height={20} alt=''/>Paisajes</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=pinturas'}>
                        <button onClick={hideSearch}> <Image src={'/icons/pinturas-icon.png'} width={20} height={20} alt=''/>Pinturas</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=religiosos'}>
                        <button onClick={hideSearch}> <Image src={'/icons/religiosos-icon.png'} width={20} height={20} alt=''/>Religiosos</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=surrealismo'}>
                        <button onClick={hideSearch}> <Image src={'/icons/surrealistas-icon.png'} width={20} height={20} alt=''/>Surrealismo</button>
                    </Link></li>
                    <li><Link href={'/tienda?busqueda=videojuegos'}>
                        <button onClick={hideSearch}> <Image src={'/icons/religiosos-icon.png'} width={20} height={20} alt=''/>Videojuegos</button>
                    </Link></li>
                </ul>
            </div>



        </section>
    )
}

export default SearchModal