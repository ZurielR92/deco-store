
import { ProductInterface } from '@/types';
import styles from './CategorySection.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    title: string
    products: ProductInterface[]
}



const CategorySection:FC<Props> = ({ products =[], title }) => {
    return (
        <section className={styles.categorySection}>
            <h2>{title}</h2>
            <div className={styles.grid}>
                {
                    products.map((product, i) => (
                        <div className={styles.card} key={product.ref}>
                            <Link href={`/cuadros/${product.ref}-${product.title.replace(/ /g,'-')}`}>
                                <Image src={product.images[0].url} alt={product.title} width={160} height={145}/>
                            </Link>
                            <Link href={`/cuadros/${product.ref}-${product.title.replace(/ /g,'-')}`}>
                                <h3>{product.title}</h3>
                            </Link>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}


export default CategorySection