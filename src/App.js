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
    constructor() {
        super(); // this is context within this component
        this.state = {
            txt: 'this is the state txt',
            no: 8
        }
    }

    update(e) {
        this.setState({txt: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>{this.state.txt} - {this.state.no}</h1>

                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
            </div>
        )
    }
}

const Widget = (props) =>
    <input type='text' onChange={props.update} placeholder='type to bind data' />

export default App