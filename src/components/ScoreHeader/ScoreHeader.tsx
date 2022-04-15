import avatar from "../../assets/icons/avatar-icon.svg";
import styles from "./ScoreHeader.module.scss";
import { minTwoNumbers } from "../../helpers/minTwoNumbers";
import coloredStar from "../../assets/icons/colored-star-icon.svg";
import tranparentStar from "../../assets/icons/transparent-star-icon.svg";

type Props = {
  score: number;
  total: number;
};

const ScoreHeader = ({ score, total }: Props) => {
  const starsArray = [];

  const progress = Math.round((score * 10) / total);

  for (let i = 0; i < 10; i++) {
    if (i < progress) {
      starsArray.push(coloredStar);
    } else {
      starsArray.push(tranparentStar);
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <span className={styles.headerText}>You scored</span>
        <div className={styles.scoreWrapper}>
          <span className={styles.scoreAmount}>{minTwoNumbers(score)}</span>
          <span className={styles.scoreSeparator}>/</span>
          <span className={styles.scoreTotal}>{minTwoNumbers(total)}</span>
        </div>
      </div>
      <div className={styles.stars}>
        {starsArray.map((star, index) => (
          <img className={styles.star} src={star} key={index} alt="star"></img>
        ))}
      </div>
    </div>
  );
};

export default ScoreHeader;
