import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    list: initialTodosList,
  }

  OnDeleteAction = id => {
    const {list} = this.state
    const filteredList = list.filter(eachObj => eachObj.id !== id)
    this.setState({list: filteredList})
  }

  render() {
    const {list} = this.state
    return (
      <div className="ul-container">
        <ul className="unordered-list">
          <h1>Simple Todos</h1>
          {list.map(eachObj => (
            <TodoItem
              todoList={eachObj}
              key={eachObj.id}
              OnDeleteAction={this.OnDeleteAction}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
