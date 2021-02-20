import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
function App() {
    return (
        <div className="container">
        <Navigation/>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
