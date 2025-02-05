'use client'
import Link from 'next/link';
import styles from './HeaderStore.module.scss';
import ArrowBack from '@/components/icons/ArrowBackIcon';
import { SearchIcon } from '@/components/icons';
import { FC, useContext } from 'react';
import { UIContext } from '@/context';

interface Props{ 
    search: string
}

const HeaderStore:FC<Props> = ({ search }) => {

    const { showSearch } = useContext(UIContext);

    return (
        <header className={styles.headerStore}>
            <div className={styles.bar}>

                <Link href={'/'}>
                    <button className={styles.backButton}>
                        <ArrowBack width={25}/>
                    </button>
                </Link>

                <button onClick={showSearch}>
                    <span>{search}</span>
                    <SearchIcon width={23}/>
                </button>
            </div>
        </header>
    )
}


export default HeaderStore;