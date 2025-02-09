import { ProductInterface } from "@/types";
import styles from './page.module.scss';
import { Selectors } from "./components/Selectors";
import { Metadata, ResolvingMetadata } from "next";
import { ImageSlider } from "./components/ImageSlider";

interface Props {
    params: { ref: string }
}


const getProduct = async ( ref:string ) => {
    const res = await fetch(`https://deco-store.vercel.app/api/v1/product/${ref}`,{next:{revalidate:172800}})
    const product = await res.json();
    return product;
}

export async function generateMetadata(
    {params }: Props,
    parent: ResolvingMetadata
) : Promise<Metadata>{

    const { ref } = params;
    const res = await fetch(`https://deco-store.vercel.app/api/v1/product/${ref.slice(0,6)}`);

    const product:ProductInterface = await res.json();

    return {
        title:product.title,
        description:`Explora la elegancia del ${product.title} un fascinante cuadro de ${product.type}, hecho en vinilo laminado mate sobre mdf de 9mm, pago contra entrega en la ciudad de medellín`,
        openGraph:{
            title:product.title,
            images:product.images[0].url,
            description: `Explora la elegancia del ${product.title} un fascinante cuadro de ${product.type}, hecho en vinilo laminado mate sobre mdf de 9mm, pago contra entrega en la ciudad de medellín`
        }
    }
}

const ProductPage = async ({ params }:Props) => {
    const { ref } = params;
    const product = await getProduct(ref.slice(0,6));
    return (

        <main className={styles.main}>
            <ImageSlider images={product.images} reff={ref.slice(0,6)} title={product.title}/>
            <div className={styles.content}>

                <h1>{product.title}</h1>
                <span>{`REF ${product.ref} | ${product.type}`}</span>
                
                <Selectors reff={product.ref}/>

                <div className={styles.details}>

                    <h2>Cuadro Decorativo de una Pieza</h2>
                    <p>
                        Impresión digital de alta resolución en vinilo laminado mate sobre MDF 9mm con soporte metálico en la parte de atrás ¡Listo para colgar! <br />
                    </p>

                    <ul>
                        <li> ✔ Listo para Instalar </li>
                        <li> ✔ Fácil de Limpiar </li>
                        <li> ✔ Trabajo Garantizado </li>
                        <li> ✔ Somos Fabricantes </li>
                    </ul>

                    <p>
                        ⌚ La producción de tu cuadro tardara máximo de 2 a 3 días hábiles, apenas esté listo lo despacharemos para que lo recibas en la puerta de tu casa. 🚚
                    </p>

                </div>

            </div>


        </main>
    )
}


export default ProductPage