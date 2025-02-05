
import Link from 'next/link';
import styles from './CategoriesBar.module.scss';
import Image from 'next/image';


const CategoriesBar = () => {
    return (
        <nav className={styles.categories}>
            <Link href={'/tienda?busqueda=personalizados'}>
            <button>
                <Image src={'/icons/personalizados-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
                <span>Personalizados</span>
            </button>
            </Link>

            <Link href={'/tienda?busqueda=animales'}>
            <button>
                <Image src={'/icons/animales-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
                <span>Animales</span>
            </button>
            </Link>

            <Link href={'/tienda?busqueda=bodegones'}>
            <button>
                <Image src={'/icons/bodegones-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
                <span>Bodegones</span>
            </button>
            </Link>

            <Link href={'/tienda?busqueda=abstractos'}>
            <button>
                <Image src={'/icons/abstractos-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
                <span>Abstractos</span>
            </button>
            </Link>

            <Link href={'/tienda?busqueda=religiosos'}>
            <button>
                <Image src={'/icons/religiosos-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
                <span>Religiosos</span>
            </button>
            </Link>

            <Link href={'/tienda?busqueda=naturaleza'}>
            <button>
                <Image src={'/icons/naturaleza-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
                <span>Naturaleza</span>
            </button>
            </Link>

            <Link href={'/tienda?busqueda=ciudades'}>
            <button>
                <Image src={'/icons/ciudades-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
                <span>Ciudades</span>
            </button>
            </Link>

            <Link href={'/tienda?busqueda=gatos'}>
            <button>
                <Image src={'/icons/gatos-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
                <span>Gatos</span>
            </button>
            </Link>

            <button className={styles.button}>
            <Image src={'/icons/mas-icon.png'} width={40} height={40} alt="Icono Cuadros Personalizados"/>
            <span>Ver Mas</span>
            </button>

        </nav>  
    )
}

export default CategoriesBar;