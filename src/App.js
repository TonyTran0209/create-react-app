import React from 'react';

/* 1st way
class App extends React.Component {
    render() {
        return React.createElement('h1', null, '1st Hello')
    }
}
*/

/* 2nd way
class App extends React.Component {
    render() {
        return <h1>2nd Hello</h1>
    }
}
*/

// 3rd way
const App = () => <h1>3rd Hello</h1>

export default App