import { CategoriesBar } from "../components/CategoriesBar";
import { Pagination } from "../components/Pagination";
import { ProductGrid } from "../components/ProductGrid";
import HeaderStore from "./components/HeaderStore/HeaderStores";
import styles from "./page.module.scss";

interface Props {
  searchParams:{
      pagina?:number
      busqueda?:string
      categoria?:string
  }
}

const getProduts = async (page:number=1, search:string='', categoria:string='') => {
  const path = `?${search ? `search=${search}&`:''}${categoria ? `category=${categoria}&`:''}&page=${page}`
  const url = process.env.NODE_ENV === 'development' ? `http://0.0.0.0:3000/api/v1/products${path}` : `https://canaima.store/api/v1/products${path}`
  const res = await fetch(url,{method:'GET', headers:{'content-type':'application/json'}, cache:'no-cache'});
  const products = await res.json();
  return products as any;
}

export default async function StorePage({searchParams}:Props) {

  const { pagina=1, busqueda ='', categoria='' } = searchParams

  const products = await getProduts(pagina, busqueda , categoria);

  return (

    <main className={styles.main}>
      <HeaderStore search={busqueda}/>
      <CategoriesBar/>
      <ProductGrid products={products.docs}/>
      <Pagination limit={products?.limit} docs={products?.totalDocs} pages={products?.totalPages} page={products?.page}/>
    </main>

  );
}
