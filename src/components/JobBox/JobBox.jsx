import styles from './JobBox.module.css'
import Bookmark from '../../assets/bookmark.svg'
import { Link } from 'react-router-dom'

const JobBox = ({ title, jobtype, minsal, maxsal, companyLogo, companyName, city, country, id }) => {
    return (
        <div className={styles.wrapper}>
            <h5 className={styles.heading}>{title}</h5>
            <div className='d-flex align-items-center mb-4'>
                <span className={styles.tag}>{jobtype}</span>
                <p className={styles.salary}>Salary: {minsal} - {maxsal}</p>
            </div>
            <div className={styles.media}>
                <i className={styles.icon}>
                    <img src={companyLogo} alt='google'/>
                </i>
                <div className={styles.content}>
                    <p className={styles.name}>{companyName}</p>
                    <span className={styles.location}>{city}, {country}</span>
                </div>
                <button className={styles.saveBtn}>
                    <img src={Bookmark} alt='bookmark'/>
                </button>
            </div>
            <Link to={`/job-details/${id}`} className={styles.blk}></Link>
        </div>
    )
}

export default JobBox
