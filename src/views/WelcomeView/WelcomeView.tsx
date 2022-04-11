import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styles from './WelcomeView.module.scss';
import logo from '../../assets/icons/logo.svg';
import cup from '../../assets/icons/cup-icon.svg';
import amount from '../../assets/icons/points-icon.svg'
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import View from '../../components/View/View';
import fetchQuestions from '../../api/Api';


const WelcomeView = () =>{

    const [selected, setSelected] = useState("Select...");
    const options = ['Easy', 'Medium', 'Hard'];
    
    const navigate = useNavigate(); 

    const startGame = () =>{
        console.log("Game has started");  
        fetchQuestions(10, "hard");
        navigate("../quiz", { replace: true });
    }

    return(
        <View isPurple={true}>
            <img alt="decoration" className={styles.decorationTopLeft}/>
            <img alt="decoration"className={styles.decorationBottomLeft}/>
            <img alt="decoration" className={styles.decorationTopRight}/>
            <img alt="decoration" className={styles.decorationBottomRight}/>
            
            <div className={styles.container}>
              <h1 className={styles.title}>Welcome to the</h1>
              <img src={logo} alt="logo" className={styles.logo}/>
              <div className={styles.form}>
                <div className={styles.label}>
                    <img className={styles.labelIcon} src={cup} alt="cup icon"/>
                    <div className={styles.labelTitle}>Difficulty</div>
                </div>
                <Select options={options} selected={selected} setSelected={setSelected}/>
                 <div className={styles.label}>
                    <img className={styles.labelIcon} src={amount} alt="amount icon"/>
                    <div className={styles.labelTitle}>Amount</div>
                </div>
                <input type="text" className={styles.input} placeholder="Type number from 1 to 50"/>
                <Button variant="Orange" startGame={startGame}>Play</Button>     
              </div>
            </div>
        </View>       
       
    )

}

export default WelcomeView; 