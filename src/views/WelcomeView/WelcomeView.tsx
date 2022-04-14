import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomeView.module.scss";
import logo from "../../assets/icons/logo.svg";
import cupIcon from "../../assets/icons/cup-icon.svg";
import amountIcon from "../../assets/icons/points-icon.svg";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import View from "../../components/View/View";
import { fetchQuestions } from "../../api/Api";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

const WelcomeView = () => {
  const dispatch = useDispatch();
  const { getQuestions, getAmount, getDifficulty } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [selected, setSelected] = useState("Select...");
  const [amount, setAmount] = useState(0);

  const options = ["Easy", "Medium", "Hard"];

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const startGame = () => {
    dispatch(getAmount(amount));
    dispatch(getDifficulty(selected));
    fetchQuestions(amount, selected.toLowerCase(), getQuestions, dispatch);

    setTimeout(() => navigate("../quiz", { replace: true }), 1000);
  };

  return (
    <View isPurple={true}>
      <img alt="decoration" className={styles.decorationTopLeft} />
      <img alt="decoration" className={styles.decorationBottomLeft} />
      <img alt="decoration" className={styles.decorationTopRight} />
      <img alt="decoration" className={styles.decorationBottomRight} />
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the</h1>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.form}>
          <div className={styles.label}>
            <img className={styles.labelIcon} src={cupIcon} alt="cup icon" />
            <div className={styles.labelTitle}>Difficulty</div>
          </div>
          <Select
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
          <div className={styles.label}>
            <img
              className={styles.labelIcon}
              src={amountIcon}
              alt="amount icon"
            />
            <div className={styles.labelTitle}>Amount</div>
          </div>
          <input
            type="number"
            onChange={handleChange}
            className={styles.input}
            placeholder="Type number from 1 to 50"
          />
          <Button variant="Orange" callback={startGame}>
            Play
          </Button>
        </div>
      </div>
    </View>
  );
};

export default WelcomeView;
