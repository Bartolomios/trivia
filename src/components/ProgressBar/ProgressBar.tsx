import styles from './ProgressBar.module.scss';

const ProgressBar = () =>
(
    <div className={styles.progress}>
        <div className={styles.progressValue}>
            <span className={styles.progressCurrent}>08</span>  
            <span className={styles.separator}>/</span>        
            <span className={styles.progressLimit}>10</span>
        </div>
        <div className={styles.progressBar}></div>
    </div>
)

export default ProgressBar;