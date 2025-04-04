import { Container } from 'react-bootstrap'
import styles from './BreadCrumb.module.css'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ heading, activeMenus = [] }) => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className='d-flex align-items-center justify-content-between'>
                    <h5 className={styles.heading}>{heading}</h5>
                    <ul className={styles.breadcrumb}>
                        <li><Link to="/">Home</Link></li>
                        {
                            activeMenus.map((item, index) => {
                                return <li key={index} className={index === activeMenus.length - 1 ? `${styles.active}` : ''}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default BreadCrumb