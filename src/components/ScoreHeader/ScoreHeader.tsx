import avatar from "../../assets/icons/avatar-icon.svg";
import styles from "./ScoreHeader.module.scss";
import { minTwoNumbers } from "../../helpers/minTwoNumbers";
import coloredStar from "../../assets/icons/colored-star-icon.svg";
import tranparentStar from "../../assets/icons/colored-star-icon.svg";

type Props = {
  score: number;
  total: number;
};

const ScoreHeader = ({ score, total }: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <span className={styles.headerText}>You scored</span>
        <div className={styles.scoreWrapper}>
          <span className={styles.scoreAmount}>{minTwoNumbers(score)}</span>
          <span className={styles.scoreSeparator}>/</span>
          <span className={styles.scoreTotal}>{total}</span>
        </div>
      </div>
      <div className={styles.stars}></div>
    </div>
  );
};

export default ScoreHeader;
