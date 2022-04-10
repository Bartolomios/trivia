import styles from './StartButton.module.scss';

type Props = {
    children?: string;
    startGame: () => void;
};

const StartButton : React.FC<Props> = ({children, startGame}) =>{
    return(
        <button onClick={startGame} className={styles.button}>{children}</button>
    ); 

}

export default StartButton; 