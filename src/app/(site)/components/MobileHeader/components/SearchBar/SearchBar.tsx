'use client'
import { useForm } from 'react-hook-form';
import styles from './SearchBar.module.scss';
import SearchIcon from '@/components/icons/SearchIcon';
import { useRouter } from 'next/navigation';

interface SearchData {
    search: string
}

const SearchBar = () => {

    const { register, handleSubmit } = useForm<SearchData>();
    const router = useRouter();

    const customHandleSubmit = ( data: SearchData ) => {
        router.replace(`/tienda?search=${data.search}`)
    }

    return (
        <div className={styles.searchBar}>
            <form action="" onSubmit={handleSubmit(customHandleSubmit)}>
                <input type="search" {...register('search')} placeholder='Encuentra tu cuadro ideal'/>
                <button><SearchIcon width={23}/></button>
            </form>
        </div>
    )
}

export default SearchBar