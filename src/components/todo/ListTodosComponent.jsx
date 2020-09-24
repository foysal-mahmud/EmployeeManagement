import React, { Component } from 'react'

class ListTodosComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
                {id: 1, description: 'Learn React js', isComplete: 'Yes'},
                {id: 2, description: 'Learn Java', isComplete: 'No'},
                {id: 3, description: 'Learn Spring', isComplete: 'yes'}
            ]
        }
    }


    render() {
        return(
            <div>
                <h1>List Todo </h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>IsComplete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.isComplete}</td>
                                    </tr>

                                )
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListTodosComponent