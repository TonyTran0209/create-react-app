import React from 'react';

class App extends React.Component {
    render(){
        return (
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        )
    }
}

class Parent extends React.Component {
    render(){
        let items = this.props.children.map(child => child) // Err with 1 children
        let items = React.Children.map(this.props.children, child => child)
        let items = React.Children.only(this.props.children)
        let items = React.Children.only(this.props.children[0])
        let items = React.Children.toArray(this.props.children)
        let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))
        console.log(items)
        return null
    }
}

export default App