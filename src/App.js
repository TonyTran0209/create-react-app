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
    filter(e){
        this.setState({filter: e.target.value})
    }
    render(){
        let items = this.state.items;
        if(this.state.filter){
            items = items.filter( item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }
        return (
            <div>
                <input type="text" onChange={this.filter.bind(this)} placeholder="type to search..." />
                {items.map(item => <Person key={item.name} person={item} />)}
            </div>
        )
    }
}

const Person = (props) => <h5>{props.person.name}</h5>

export default App