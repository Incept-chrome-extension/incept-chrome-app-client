/* eslint-disable */
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import UserDataContext from './UserDataContext';

class UserDataProvider extends Component {
  constructor(props) {
    super(props);
    let todoArray=[];
    if(JSON.parse(localStorage.getItem('userTodos'))){
      todoArray=JSON.parse(localStorage.getItem('userTodos'))
    }
    let quickLinks=[];
    if(JSON.parse(localStorage.getItem('quickLinks'))){
      quickLinks=JSON.parse(localStorage.getItem('quickLinks'))
    }
    this.state = {
      userTodos: todoArray,
      quickLinks: quickLinks
    };
  }

  addTodo(todo){
    const newKey = uniqid();
    const obj ={
      title: todo,
      key: newKey,
      done: false,
    };
    this.setState(prev =>( {
      userTodos: [...prev.userTodos, obj]
    }))
    let str = JSON.stringify(this.state.userTodos);
    if(str.length<=2){
      str = str.slice(0,-1)
      str = str +JSON.stringify(obj)+']'
    } else {
      str = str.slice(0,-1)
      str = str +','+JSON.stringify(obj)+']'
    }
    localStorage.setItem('userTodos', str)
  };

  setTodo(newTodos){
    this.setState({
      userTodos: newTodos
    })
    localStorage.setItem('userTodos', JSON.stringify(this.state.userTodos))
  }

  addQuickLink(title, link, icon){
    const newKey = uniqid();
    const httpPrefix = 'http://';
    const httpsPrefix = 'https://';
    if((link.substr(0, httpsPrefix.length)!=httpsPrefix) && (link.substr(0, httpPrefix.length)!=httpPrefix)){
      link = httpPrefix + link;
    }
    const obj = {
      title: title,
      link: link,
      key: newKey,
      favicon: icon
    }
    console.log(obj)
    this.setState(prev =>( {
      quickLinks: [...prev.quickLinks, obj]
    }))
    let str = JSON.stringify(this.state.quickLinks);
    if(str.length<=2){
      str = str.slice(0,-1)
      str = str +JSON.stringify(obj)+']'
    } else {
      str = str.slice(0,-1)
      str = str +','+JSON.stringify(obj)+']'
    }
    localStorage.setItem('quickLinks', str)
  }
  setQuickLink(newLinks){
    this.setState({
      quickLinks: newLinks
    })
    localStorage.setItem('quickLinks', JSON.stringify(this.state.quickLinks))
  }

  render() {
    const contextValue = {
      userTodos: this.state.userTodos,
      addTodo: (newTodo)=>this.addTodo(newTodo),
      deleteTodo: ()=>this.deleteTodo(),
      setTodo: (newTodo)=>this.setTodo(newTodo),
      userQuickLinks: this.state.quickLinks,
      addQuickLink : (title,link,icon) => this.addQuickLink(title,link,icon),
      setQuickLink: (newLinks) => this.setQuickLink(newLinks)
    };

    return (
      <UserDataContext.Provider value={contextValue}>
        {this.props.children}
      </UserDataContext.Provider>
    );
  }
}

UserDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserDataProvider;
