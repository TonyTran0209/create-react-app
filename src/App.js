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
// const App = () => <h1>3rd Hello</h1>

/* multi-lines
class App extends React.Component {
    render() {
        return (
            <div>
                <b>Hello</b>
                <b>Tony</b>
            </div>
        )
    }
}
*/

class App extends React.Component {
    render() {
        let name = this.props.name
        let txt_default = this.props.txt_default
        return (
            <p>
                <h1>I'm {name}, {this.props.age} years old</h1>
                <h2>{txt_default}</h2>
            </p>
        )
    }
}

App.defaultProps = {
    txt_default: "this is the default text"
}

export default App