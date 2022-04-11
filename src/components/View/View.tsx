import styles from './View.module.scss'
import cx from 'classnames'

type Props = {
    children: React.ReactNode,
    isPurple?: boolean
};

const View = ({children, isPurple} : Props) =>
(
        <div className={cx(styles.view, (isPurple && styles.viewPurple))}>
            {children}
        </div>
    
) 

export default View;