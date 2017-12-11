import React from 'react';
//import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {a: 'a', b: 'b', c: 'c', d: 'd'}
    }
    update(){
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value,
            c: this.c.value,
            d: this.d.refs.input.value
        })
    }
    render(){
        return (
            <div>
                <input
                    ref="a"
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.b}
                <hr />
                <input
                    ref={ node => this.c = node }
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.c}
                <hr />
                <Input
                    ref={ component => this.d = component }
                    update={this.update.bind(this)}
                /> {this.state.d}
            </div>
        )
    }
}

class Input extends React.Component {
    render(){
        return <div><input ref="input" type="text" onChange={this.props.update}/></div>
    }
}

export default App