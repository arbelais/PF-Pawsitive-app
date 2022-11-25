import { NextComponentType } from 'next'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar: NextComponentType = () => {
    return (
        <>
            <nav>
                <div className={styles.navContainer}>
                    <div className={styles.logoContainer}>
                        <Link href={'/'}>
                            <a>
                                <span className={styles.paw}>Paw</span>
                                <span className={styles.sitive}>sitive</span>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.linksContainer}>
                        <div>
                            <Link href={'/'}>
                                <a>Home</a>
                            </Link>
                        </div>
                        <div>
                            <Link href={'/adoptions'}>
                                <a>Adopciones</a>
                            </Link>
                        </div>
                        <div>
                            <Link href={'/services'}>
                                <a>Servicios</a>
                            </Link>
                        </div>
                        <div>
                            <Link href={'/contact'}>
                                <a>Contacto</a>
                            </Link>
                        </div>
                        <div>
                            <Link href={'/about'}>
                                <a>About</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.signUpContainer}>
                        <div className={styles.signUpLink}>
                            <Link href="#">
                                <a>Sign up</a>
                            </Link>{' '}
                            |{' '}
                            <Link href="#">
                                <a>Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
