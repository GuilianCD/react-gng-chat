import styles from '@styles/Navbar.module.css'

export function Navbar(props) {
    const { children } = props;

    return (
        <nav className={styles.navbar}>
            <ul>
                {children}
            </ul>
        </nav>
    );
}

export function NavElement(props) {
    return (
        <li className={[styles.navElement, props.className].join(" ")}>
            {props.children}
        </li>);
}


export default {
    Navbar,
    NavElement,
}