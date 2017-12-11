import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {items: []}
    }
    componentWillMount(){
        fetch( 'https://swapi.co/api/people/?format=json' )
            .then( response => response.json() )
            .then( ({results: items}) => this.setState({items}))
    }
    render(){
        let items = this.state.items;
        return (
            <div>
                {items.map(item => <Person key={item.name} person={item} />)}
            </div>
        )
    }
}

const Person = (props) => <h5>{props.person.name}</h5>

export default App