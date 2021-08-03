import Header from "./Components/Header";
import Main from "./Components/Main";
import Profile from "./Components/Profile";
import "./css/app.css"

const App = () => {
    return (
        <div className="container">
            <Header />
            <Main />
        </div>
    );
}

export default App;