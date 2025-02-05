
import { ProductForm } from '../components/ProductForm';
import styles from './page.module.scss';


const AddProductPage = () => {
    return (
        <main className={styles.page}>
            <ProductForm mode='Add'/>
        </main>
    )
}

export default AddProductPage;