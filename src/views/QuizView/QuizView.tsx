import ProgressBar from '../../components/ProgressBar/ProgressBar';
import View from '../../components/View/View';
import styles from './QuizView.module.scss';

const QuizView = () =>{ 
    return(

         <View>
            <img alt="decoration" className={styles.decorationTopLeft}/>
            <img alt="decoration"className={styles.decorationBottomLeft}/>
            <img alt="decoration" className={styles.decorationTopRight}/>
            <img alt="decoration" className={styles.decorationBottomRight}/>

              <div className={styles.container}>
                    <div className={styles.categoryName}>Entertainment: Videogames</div> 
                    <div className={styles.level}>Level: Medium</div>
                    <ProgressBar/>
                    <div className={styles.questionTitle}>
                         The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial
                    </div>
              </div>         
         </View>
         )
   
}


export default QuizView