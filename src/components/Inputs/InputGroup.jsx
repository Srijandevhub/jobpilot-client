import { useState } from 'react'
import styles from './InputGroup.module.css'

const InputGroup = ({ placeholder, id, type, onChange, value }) => {
    const [show, setShow] = useState(false);
    if (type === 'password') {
        return (
            <div className={styles.formGroup}>
                <input type={show ? 'text' : 'password'} id={id} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={styles.control}/>
                <button aria-label='show-toogle' onClick={() => setShow(!show)} className={styles.btn}>
                    {
                        show ?
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        </svg> :
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                        <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>                                      
                    }
                </button>
            </div>
        )
    }
    return (
        <div className={styles.formGroup}>
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={styles.control}/>
        </div>
    )
}

export default InputGroup