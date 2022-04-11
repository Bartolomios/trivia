import { useState} from 'react';
import cx from 'classnames'
import styles from './Select.module.scss';
import arrow from '../../assets/icons/white-arrow-down.svg'


type Props = {
    selected:string,
    setSelected:Function,
    options:string[]
}


const Select = ({selected , setSelected, options} : Props)  =>{

    const [isActive, setIsActive] = useState(false);
 
    return(
        <div className={styles.select}>    
            <div className={styles.selectBtn} onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <img src={arrow} className={cx(styles.selectArrow, (isActive && styles.selectArrowActive))} alt="dropdown-arrow"/>
            </div>        
            {isActive &&
            (
            <div className={styles.selectList}>
                {
                options.map(option => (
                <div 
                    onClick={(e)=> 
                        {
                        setSelected(option);
                        setIsActive(false);
                        }}
                    key={option}    
                    className={styles.selectItem}> 
                    {option}
                </div>
                ))               
                }
            </div>  
            )}                      
        </div>
    );

}

export default Select;