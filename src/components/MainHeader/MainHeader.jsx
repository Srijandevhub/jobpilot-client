import { Container } from 'react-bootstrap'
import styles from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <header className={`${styles.header}`}>
            <div className={styles.headerTop}>
                <Container>
                    <ul></ul>
                </Container>
            </div>
        </header>
    )
}

export default MainHeader