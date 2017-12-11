import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {a: '', b: ''}
    }
    update(){
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value,
            c: this.c.value
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
            </div>
        )
    }
}

export default App