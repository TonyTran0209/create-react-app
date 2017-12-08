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
        return <Title text="123" />
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    // text: React.PropTypes.string.isRequired
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} was too short`)
        }
    }
}

export default App