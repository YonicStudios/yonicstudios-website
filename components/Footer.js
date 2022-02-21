import styles from "../styles/Footer.module.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <span className={styles.flip}>&copy;</span> {new Date().getFullYear()} YonicStudios, all wrongs reserved.
        </footer>
    )
}