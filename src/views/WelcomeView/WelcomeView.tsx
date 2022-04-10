import React from 'react';
import styles from './WelcomeView.module.scss';
import logo from '../../assets/icons/logo.svg';
import cup from '../../assets/icons/cup-icon.svg';
import amount from '../../assets/icons/points-icon.svg'
import Select from '../../components/Select/Select';
import StartButton from '../../components/StartButton/StartButton';
import { useNavigate } from "react-router-dom";


const WelcomeView = () =>{

    let navigate = useNavigate();


    const startGame = () =>{
        console.log("Game has started");  
        navigate("../quiz", { replace: true });
    }

    return(
        <div className={styles.view}>
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
                <Select/>
                 <div className={styles.label}>
                    <img className={styles.labelIcon} src={amount} alt="cup icon"/>
                    <div className={styles.labelTitle}>Amount</div>
                </div>
                <input type="text" className={styles.input} placeholder=""/>
                <StartButton startGame={startGame}>Play</StartButton>     
              </div>
            </div>
         
        </div>
    )

}

export default WelcomeView; 