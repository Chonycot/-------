import "./styles.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import RouterMenu from "./Router/RouterMenu";


export default function App() {
    return (
        <div className='App'>
            <RouterMenu />
            <Header />
            <Main />
        </div>
    );
};
