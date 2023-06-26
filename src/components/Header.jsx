import styles from "@/styles/Header.module.css";

const Header = () => {
    const headerStyle = {
        padding: '20px 0',
        lineHeight: '1.5em',
        textAlign: 'center',
    };
  
    return (
        <header style={headerStyle} className={styles.header}>
            <h1>Todos List</h1>
            <p>What else needs to be done.!?</p>
        </header>
    );
};

export default Header;