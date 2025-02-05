'use client'
import { FC, useCallback } from 'react';
import styles from './Pagination.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
    limit?: number
    page?: number
    pages?: number
    docs: number
}


const Pagination:FC<Props> = ({ limit=4, page = 1, pages, docs }) => {


    const searchParams = useSearchParams();
    const router = useRouter()
    const pathname = usePathname()

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
    )

    return (
        <div className={styles.pagination}>
            {
                docs <= limit ? null : (
                    <>
                    {
                        page === 1 ? null : (
                            <button onClick={()=>router.replace(`${pathname}?${createQueryString('pagina',(page-1).toString())}`)}>Pagina Anterior</button>
                        )
                    }
        
                    {
                        page === pages ? null : (
                            <button onClick={()=>router.replace(`${pathname}?${createQueryString('pagina',(page+1).toString())}`)}>Siguiente Página</button>
                        )
                    }
                    </>
                )
            }

        </div>
    )
}


export default Pagination;