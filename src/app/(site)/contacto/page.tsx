
import Link from 'next/link';
import styles from './page.module.scss';
import { EmailIcon, FacebookIcon, InstagramIcon, PinterestIcon, TikTokIcon, WhatsappIcon } from '@/components/icons';

const ContactPage = () => {
    return (
        <main className={styles.main}>
            
            <h1>Contacto</h1>


            <div className={styles.container}>

                <div>
                    <h2>Whatsapp</h2>
                    <Link target='_blank' href={'https://wa.me/573017497431'}><WhatsappIcon width={30}/> 301 749 74 31</Link>
                </div>

                <div>
                    <h2>Cooreo Electrónico</h2>
                    <Link href={'mailto:ventas@canaima.store'}> <EmailIcon width={30}/> ventas@canaima.store</Link>
                </div>

                <div>
                    <h2>Ubicación</h2>
                    <p>Recuerda que somos una tienda virtual que opera en la Ciudad de Medellín</p>
                </div>

                <div>
                    <h2>Redes Sociales</h2>
                    <div className={styles.redes}>
                        <Link href={'/contacto'}><FacebookIcon width={40}/></Link>
                        <Link href={'/contacto'}><InstagramIcon width={40}/></Link>
                        <Link href={'/contacto'}><PinterestIcon width={40}/></Link>
                        <Link href={'/contacto'}><TikTokIcon width={40}/></Link>
                    </div>
                </div>


            </div>
        </main>
    )
}

export default ContactPage;