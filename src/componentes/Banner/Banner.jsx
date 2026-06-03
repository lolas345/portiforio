import styles from "./Banner.module.css"
import minhafoto from "../../assets/minhafoto.jpg"
import circuloColorido from "../../assets/circulo_colorido.png"

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Olá, seja bem-vindo!</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal!! Eu sou a Eloá Ferreira Rego, estudante do Curso de Desenvolvimento de Sistemas do Senai- unidade de Pederneiras. Aqui compartilho vários conhecimentos, espero que aprenda algo novo</p>
            </div>

            <div className={styles.imagens}>
                <img src={circuloColorido}
                 className={styles.circuloColorido}
                />

                <img 
                 className={styles.minhaFoto}
                 src={minhafoto} 
                 alt="Foto de perfil" 
                />
            </div>
        </div>
    )

}
export default Banner