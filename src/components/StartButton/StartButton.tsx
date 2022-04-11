import styles from './StartButton.module.scss';

type Props = {
    children?: string,
    startGame: () => void
};

const StartButton = ({children, startGame} : Props)  =>{
    
    return(
        <button onClick={startGame} className={styles.button}>{children}</button>
    ); 

}

export default StartButton; 