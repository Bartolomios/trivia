import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import QuizView from "./views/QuizView/QuizView";
import ScoreView from "./views/ScoreView/ScoreView";
import WelcomeView from "./views/WelcomeView/WelcomeView";
import store from "./state/store";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<WelcomeView />} />
            <Route path="/quiz" element={<QuizView />} />
            <Route path="/score" element={<ScoreView />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </Provider>
  );
};

export default App;
