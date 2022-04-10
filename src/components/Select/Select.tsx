import React from 'react';
import styles from './Select.module.scss';

const Select = () =>{

    return(
        <select className={styles.select}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
        </select>
    );

}

export default Select;