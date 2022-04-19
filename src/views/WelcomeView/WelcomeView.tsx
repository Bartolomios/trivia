import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomeView.module.scss";
import logo from "../../assets/icons/logo.svg";
import cupIcon from "../../assets/icons/cup-icon.svg";
import amountIcon from "../../assets/icons/points-icon.svg";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import View from "../../components/View/View";
import AnimatedPage from "../../components/AnimetedPage/AnimatedPage";
import { fetchQuestions } from "../../api/Api";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

const WelcomeView = () => {
  const dispatch = useDispatch();
  const { setQuestions, setAmount, setDifficulty, setStatus } =
    bindActionCreators(actionCreators, dispatch);

  const [selected, setSelected] = useState("Select...");
  const [inputAmount, setInputAmount] = useState(0);
  const [validation, setValidation] = useState({
    select: false,
    input: false,
  });
  const [buttonError, setButtonError] = useState(false);

  useEffect(() => {
    if (selected !== "Select...") {
      setValidation((prevState) => ({
        select: true,
        input: prevState.input,
      }));
      setButtonError(false);
    }
  }, [selected]);

  const options = ["Easy", "Medium", "Hard"];

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAmount(parseFloat(event.target.value));
    setValidation((prevState) => ({
      select: prevState.select,
      input: event.target.checkValidity(),
    }));
  };

  const startGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (validation.select && validation.input) {
      setAmount(inputAmount);
      setDifficulty(selected);
      fetchQuestions(
        inputAmount,
        selected.toLowerCase(),
        setQuestions,
        setStatus
      );
      setButtonError(false);
      navigate("../quiz", { replace: true });
    } else {
      setButtonError(true);
    }
  };

  return (
    <AnimatedPage>
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
            <Input handleChange={handleChange} />
            <Button variant="Orange" onClick={startGame}>
              Play
            </Button>
            {buttonError && (
              <span className={styles.error}>Please select correct values</span>
            )}
          </div>
        </div>
      </View>
    </AnimatedPage>
  );
};

export default WelcomeView;
