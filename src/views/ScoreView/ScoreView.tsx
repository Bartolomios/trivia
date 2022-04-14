import React from "react";
import ScoreList from "../../components/ScoreList/ScoreList";
import View from "../../components/View/View";
import styles from "./ScoreView.module.scss";

const ScoreView = () => {
  return (
    <View isPurple={true}>
      <img alt="decoration" className={styles.decorationTopLeft} />
      <img alt="decoration" className={styles.decorationBottomLeft} />
      <img alt="decoration" className={styles.decorationTopRight} />
      <img alt="decoration" className={styles.decorationBottomRight} />
      <ScoreList />
    </View>
  );
};

export default ScoreView;
