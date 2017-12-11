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
            items = items.filter( item =>
                item.name.toLowerCase()
                    .includes(this.state.filter.toLowerCase()))
        }
        return (
            <p>
                {items.map((item,i) => <h5 key={i}>{item.name}</h5>)}
                <hr />
                {items.map(item => <h5 key={item.name}>{item.name}</h5>)}
            </p>
        )
    }
}

export default App