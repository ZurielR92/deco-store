

import { ProductInterface } from '@/types';
import styles from './ProductGrid.module.scss';
import { FC } from 'react';
import { ProductCard } from '../ProductCard';

interface Props {
    products?: ProductInterface[]
}


const ProductGrid:FC<Props> = ({ products=[] }) => {
    return (
        <div className={styles.grid}>
            {
                products.map(product=>(
                    <ProductCard key={product.ref} product={product}/>
                ))
            }
        </div>
    )
}

export default ProductGrid;