import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import QuizView from "./views/QuizView/QuizView";
import ScoreView from "./views/ScoreView/ScoreView";
import WelcomeView from "./views/WelcomeView/WelcomeView";
import store from "./state/store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/quiz" element={<QuizView />} />
        <Route path="/score" element={<ScoreView />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
