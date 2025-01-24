import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./styles.css";


console.log('1 Yes');

const rootElement = document.getElementById("root");
console.log('2 Yes');
const root = createRoot(rootElement);
console.log('3 Yes');
root.render(
    <BrowserRouter basename="/">
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);
console.log('4 Yes')