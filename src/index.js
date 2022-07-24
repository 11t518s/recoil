import React, {ErrorBoundary} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RecoilRoot} from 'recoil';
import ContextApi from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ContextApi>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </ContextApi>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from 'react';
// import App from './App';
// import {render} from 'react-dom';
// import {RecoilRoot} from 'recoil';
// import ContextApi from './context';

// render(
//     <ContextApi>
//         <RecoilRoot>
//             <App />
//         </RecoilRoot>
//     </ContextApi>,
//     document.querySelector('#root'),
// );
