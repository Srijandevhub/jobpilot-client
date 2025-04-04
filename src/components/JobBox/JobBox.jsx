import styles from './JobBox.module.css'
import Google from '../../assets/google.svg'
import Bookmark from '../../assets/bookmark.svg'

const JobBox = ({ onClick }) => {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <h5 className={styles.heading}>Techical Support Specialist</h5>
            <div className='d-flex align-items-center mb-4'>
                <span className={styles.tag}>Part Time</span>
                <p className={styles.salary}>Salary: $20,000 - $25,000</p>
            </div>
            <div className={styles.media}>
                <i className={styles.icon}>
                    <img src={Google} alt='google'/>
                </i>
                <div className={styles.content}>
                    <p className={styles.name}>Google Inc.</p>
                    <span className={styles.location}>Dhaka, Bangladesh</span>
                </div>
                <button className={styles.saveBtn}>
                    <img src={Bookmark} alt='bookmark'/>
                </button>
            </div>
        </div>
    )
}

export default JobBox