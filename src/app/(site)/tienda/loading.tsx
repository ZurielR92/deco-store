import HeaderStore from "./components/HeaderStore/HeaderStores";
import styles from './page.module.scss';


const TiendaLoading = () => {
    return (
        <main style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <HeaderStore search=""/>
            <span className={styles.loader}></span>
        </main>
    )
}

export default TiendaLoading;