
import styles from './page.module.scss';


const FavoritesLoading = () => {
    return(
        <main className={styles.main}>
            <div className={styles.container}>
                <h1>Mis Favoritos</h1>
                <span>Cargando lista de favoritos</span>

            </div>
        </main>
    )
}

export default FavoritesLoading;