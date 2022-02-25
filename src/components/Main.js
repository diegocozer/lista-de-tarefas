import React, { Component } from "react";

import { FaPlus } from "react-icons/fa";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefa: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefa , index} = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefa.indexOf(novaTarefa) != -1) return;

    const novaTarefas = [...tarefa];

    if(index == -1){
      
      this.setState({
        tarefa: [...novaTarefas, novaTarefa],
        novaTarefa: '',
      });
    }else{
      novaTarefas[index] = novaTarefa
      this.setState({
        tarefa: [...novaTarefas],
        index: -1
      })
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefa} = this.state;

    this.setState({
      index,
      novaTarefa: tarefa[index]
    })
  };

  handleDelete = (e, index) => {
    const { tarefa } = this.state;
    const novasTarefas = [...tarefa];
    novasTarefas.splice(index, 1);
    this.setState({ tarefa: [...novasTarefas] });
  };

  render() {
    const { novaTarefa, tarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas!</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefa">
          {tarefa.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
