import { Link } from 'react-router-dom'
import styles from './CompanyBox.module.css'

const CompanyBox = ({ logo, name, position, id }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.media}>
                <i>
                    <img src={logo} alt='logo'/>
                </i>
                <div className={styles.mediaBody}>
                    <h4 className={styles.heading}>{name}</h4>
                </div>
            </div>
            <div className={styles.positions}>
                Open Positions {position}
            </div>
            <Link className={styles.blankLnk} to={`/company-details/${id}`}></Link>
        </div>
    )
}

export default CompanyBox