import styles from './Menu.module.css'
import MenuLinks from '../MenuLinks/MenuLinks'

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLinks to="/">
                    Início
                </MenuLinks>

                <MenuLinks to="/sobremim">
                    Sobre mim
                </MenuLinks>
            </nav>
        </header>
    )
}

export default Menu