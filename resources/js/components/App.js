import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';


function App() {
    return (
        <>
        <div>
            <div><Navigation /></div>
        </div>
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
