import ProductModel from "@/models/product.model"
import { ProductInterface } from "@/types"
import { FC } from "react"
import { ProductGrid } from "../components/ProductGrid"
import { Pagination } from "../components/Pagination"
import styles from './page.module.scss';
import { connect, disconnect } from "@/utils/mongo"


interface Props {
    searchParams:{
        page?:number
        list: string
    }
  }

  const getProduts = async (page:number=1, list:string[]=[]) => {
    let query:any = {
        ref: {$in:list}
    };
  
    await connect();
    const products = await ProductModel.paginate({
      limit:20,
      page,
      query,
    });
    await disconnect();
  
    const p:ProductInterface[] | undefined = products?.docs.map(p=>{
      const newProduct:ProductInterface = {
        title:p.title,
        type:p.type,
        ref:p.ref,
        images:p.images.map(i=>{
          return{
            url:i.url,
            alt:i.alt
          }
        })
      }
      return newProduct
    })
  
    return {
      products: p,
      limit: products?.limit || 24,
      totalDocs: products?.totalDocs || 0,
      totalPages: products?.totalPages || 0,
      page: products?.page || 1
    };
  }


const FavoritesPage = async ({searchParams}:Props) => {

    const {page=1, list} = searchParams
    const newList:any[] = JSON.parse(list)
    const products = await getProduts(page, newList);


    return (
        <main className={styles.main}>
            <div className={styles.container}>
              <h1>Mis Favoritos</h1>
              <span>{`${products.totalDocs} Cuadros en mi lista`}</span>
            </div>
            <ProductGrid products={products.products}/>
            <Pagination limit={products?.limit} docs={products?.totalDocs} pages={products?.totalPages} page={products?.page}/>
        </main>
    )
}


export default FavoritesPage;