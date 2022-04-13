import React from "react";
import View from "../../components/View/View";
import styles from "./ScoreView.module.scss";

const ScoreView = () => {
  return (
    <View isPurple={true}>
      <img alt="decoration" className={styles.decorationTopLeft} />
      <img alt="decoration" className={styles.decorationBottomLeft} />
      <img alt="decoration" className={styles.decorationTopRight} />
      <img alt="decoration" className={styles.decorationBottomRight} />
      Score View
    </View>
  );
};

export default ScoreView;
