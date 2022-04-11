import styles from './Button.module.scss';
import cx from 'classnames';

type Props = {
    children?: string,
    startGame?: () => void,
    variant: string
}

const Button = ({children, startGame, variant} : Props)  =>{

    const classList = cx(
        styles.button,
        {
          [styles.buttonOrange] : (variant === 'Orange'),
          [styles.buttonPurple] : (variant === 'Purple'),
          [styles.buttonWhite] : (variant === 'White')
        });

      
    return(
        <button onClick={startGame} className={classList}>{children}</button>
    ); 

}

export default Button; 