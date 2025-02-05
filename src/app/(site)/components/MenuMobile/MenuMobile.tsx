'use client'
import Link from 'next/link';
import styles from './MenuMobile.module.scss';
import CanaimaIcon from '@/components/icons/CanaimaIcon';
import { FavoriteIcon, FiltersIcon, SupportIcon, WhatsappIcon } from '@/components/icons';
import { usePathname, useRouter } from 'next/navigation';
import { getFavorites } from '@/utils/localStorage';

const MenuMobile = () => {

    const { push } = useRouter();
    const pathname = usePathname();



    return (
        <nav className={styles.menu}>
            <div onClick={()=>push(`/favoritos?list=${JSON.stringify(getFavorites())}`)} className={`${styles.a} ${pathname.startsWith('/favoritos') ? styles.active:''}`}>
                <FavoriteIcon width={22}/>
                <span>Favoritos</span>
            </div>
            <Link href={'/'} className={pathname.startsWith('/tienda') || pathname==='/' ? styles.active:''}>
                <CanaimaIcon width={32}/>
                <span>Tienda</span>
            </Link>
            <Link href={'/'} className={pathname.startsWith('/soporte') ? styles.active:''}>
                <SupportIcon width={22}/>
                <span>Soporte</span>
            </Link>
        </nav>
    )
}

export default MenuMobile;