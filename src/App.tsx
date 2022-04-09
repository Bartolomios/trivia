import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './styles/style.scss';  
import QuizView from './views/QuizView';
import ScoreView from './views/ScoreView';
import WelcomeView from './views/WelcomeView';


const App = () => (
        <BrowserRouter>
          <Routes>
                <Route  path="/" element={<WelcomeView/>} />
                <Route  path="/quiz" element={<QuizView/>} />
                <Route  path="/score" element={<ScoreView/>}/>
            </Routes>
        </BrowserRouter>);
export default App;
