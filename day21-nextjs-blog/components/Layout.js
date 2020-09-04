import styles from './layout.module.css';

const Layout = ({ children, ...rest }) => <div className={styles.container} {...rest}>{children}</div>;

export default Layout