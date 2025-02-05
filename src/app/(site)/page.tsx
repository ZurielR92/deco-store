import { SearchIcon } from "@/components/icons";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CategoriesBar } from "./components/CategoriesBar";
import { CategorySection } from "./components/CategorySection";


const getCategories = async () => {
  const url = process.env.NODE_ENV === 'development' ? `http://0.0.0.0:3000/api/v1/categories/home` : `https://canaima.store/api/v1/categories/home`;
  try {
    const res = await fetch(url,{method:'GET', headers:{'content-type':'application/json'}, cache:'no-cache'});
    const categories:any = await res.json()
    return {
      news: categories.news,
      animals: categories.animals,
      paints: categories.paints,
      nature: categories.nature,
      cities: categories.cities
    }
  } catch (error) {
    return {
      news:[]
    }
  }


}


export default async function Home() {

  let categories;
  try {
    categories = await getCategories();
  } catch (error) {
    categories= {
      news: [],
      animals: [],
      paints: [],
      nature: [],
      cities: []
    }
  }

  return (
    <main className={styles.main}>

      <div className={styles.header}>
        <Image src={'/logo-alt-canaima.png'} width={150} height={38} alt="Logo Canaima Store"/>
        <Image className={styles.imgBackground} src={'/images/welcome.jpg'} fill alt=""/>
        <h1>
          Mas de 1000 diseños de <br />
          <strong>Cuadros decorativos</strong>
        </h1>
        <button id="btnSearchMobile">
          <SearchIcon width={17}/>
          Busca tu cuadro ideal
        </button>
        <p><strong>Evíos Gratis</strong> y Pagos Contraentrega <br /> solo en la Ciudad de Medellín</p>
      </div>

      <CategoriesBar/>

      <CategorySection title="Lo mas Nuevo" products={categories.news}/>

      <section className={styles.about}>
        <h2>Sobre Nosotros</h2>
        <p>
        Nuestro compromiso es brindarte piezas que transformen tus espacios y reflejen tu estilo. Descubre la magia de la decoración con Canaima.Store, donde cada cuadro cuenta tu historia.
        </p>
      </section>

      <CategorySection title="Cuadros de Animales" products={categories.animals}/>

      <CategorySection title="Pinturas" products={categories.paints}/>

      <CategorySection title="Cuadros de la Naturaleza" products={categories.nature}/>

      <CategorySection title="Cuadros de Ciudades" products={categories.cities}/>

      <section className={styles.sec}>
        <h2>¿Como ordenar cuadros en Canaima.Store?</h2>
        <ul>
          <li>
            <h3>1. Explora Nuestra Colección</h3>
            <p>
              Descubre una amplia variedad de diseños únicos y personalizados en nuestra colección de cuadros. Explora sin necesidad de registrarte y encuentra aquellos que se adapten a tu estilo y preferencias.
            </p>
          </li>

          <li>
            <h3>2. Agrega a tu Lista de Favoritos</h3>
            <p>
              {`Marca tus diseños favoritos haciendo clic en el botón de 'Agregar a Favoritos'. Esta lista te permite revisar y comparar fácilmente tus elecciones antes de tomar una decisión final.`}
            </p>
          </li>

          <li>
            <h3>3. Revisa tu Lista de Favoritos</h3>
            <p>
              Accede a tu lista de favoritos en cualquier momento para ver los diseños que has seleccionado. Organiza y filtra tus opciones antes de proceder con tu pedido.
            </p>
          </li>

          <li>
            <h3>4. Haz tu Pedido por Whatsapp</h3>
            <p>
              Una vez que hayas decidido, simplemente haz clic en el enlace proporcionado en tu lista de favoritos para iniciar una conversación por WhatsApp. Nuestro equipo estará encantado de ayudarte a completar tu pedido.
            </p>
          </li>
        </ul>
      </section>


      <section className={styles.footer}>
        <h2>Links que te pueden ayudar</h2>
        <ul>
          <li><Link href={'/contacto'}>Contacto</Link></li>
          <li><Link href={'/contacto'}>¿Quienes Somos?</Link></li>
          <li><Link href={'/contacto'}>Terminos y Condiciones</Link></li>
          <li><Link href={'/contacto'}>Preguntas mas frecuentes</Link></li>
        </ul>
      </section>


    </main>
  );
}
