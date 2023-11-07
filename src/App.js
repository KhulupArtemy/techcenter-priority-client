import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.scss'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
