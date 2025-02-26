import { useState } from "react";
import styles from "../Paginas/Home/home.module.css";
import { Link } from 'react-router-dom'

function MenuHamburguer() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    return (
        <>
            <div id="menu" className={menuAtivo ? styles.menuAtivado : styles.menuDesativado}>
                <nav>
                    <div><Link to="/login"><button className={styles.botao}>Login</button></Link>
                        <div className={styles.seta}>
                            <div className={styles.setaSuperior}></div>
                            <div className={styles.setaInferior}></div>
                        </div>
                    </div>
                    <div><Link to="/Cadastro"><button className={styles.botao}>Cadastro</button></Link>
                        <div className={styles.seta}>
                            <div className={styles.setaSuperior}></div>
                            <div className={styles.setaInferior}></div>
                        </div>
                    </div>
                </nav>
            </div>

            {menuAtivo && (
                <div id="overlay" className={styles.foraDoMenuAtivado} onClick={toggleMenu}></div>
            )}

            <div className={styles.containerHamburguer} onClick={toggleMenu}>
                <div className={styles.hamburguer}></div>
                <div className={styles.hamburguer}></div>
                <div className={styles.hamburguer}></div>
            </div>
        </>
    );
}

export default MenuHamburguer;
