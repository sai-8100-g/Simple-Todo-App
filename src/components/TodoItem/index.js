import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {todoList, OnDeleteAction} = this.props
    const {title, id} = todoList

    const OnDeleteTodo = () => {
      OnDeleteAction(id)
    }

    return (
      <li>
        <div className="para-cont">
          <p>{title}</p>
        </div>
        <div>
          <button type="button" onClick={OnDeleteTodo}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
