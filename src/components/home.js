import React from 'react'

export default class Home extends React.Component {

    render(){ 
        return (
            <div>
                <h1>This is {this.props.title} Page</h1>
                <button onClick= {this.props.addPages}>Add Pages</button>
                <h3>Pages: {this.props.pages}</h3>
            </div>
    )
   }
}
