import React from 'react'



import Aside from './demo/pages/_aside';
import StateColors from './demo/pages/base/_stateColors';



const App = () => (
    <div className="m-grid m-grid--hor m-grid--root m-page">
        <Aside />
        <StateColors />
    </div>
);

export default App