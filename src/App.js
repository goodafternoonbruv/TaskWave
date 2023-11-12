import React, { Component } from 'react';
import Todo from "./components/Todo";
import './App.css';

class Header extends Component {
  render() {
    return (

      <nav class="nav">
        <div class="logo-container">
        </div>

        <ul class="list-items">
          <li class="list">
            <a href="#" class="link"> Notes </a>
          </li>
          <li class="list">
            <a href="#" class="link"> Lists </a>
          </li>

          <li class="list">
            <a href="#" class="link"> Recordings </a>
          </li>
          <li class="list">
            <a href="index.html" class="link"> </a>

          </li>
        </ul>
      </nav>
    );
  }
}

class Footer extends Component {

  render() {
    return (
      <nav class="nav">
        <div class="logo-container">
        </div>

        <ul class="list-items">
          <li class="list">
            <a href="#" class="link"> Home </a>
          </li>
          <li class="list">
            <a href="#" class="link"> Add </a>
          </li>

          <li class="list">
            <a href="#" class="link"> Profile </a>
          </li>
          <li class="list">
            <a href="index.html" class="link"> </a>

          </li>
        </ul>
      </nav>
    );
  }


}



class Search extends Component {

  render() {
    return (
      <center>
        <div class="topnav">
          <input type="text" placeholder="Search.." />
        </div>
      </center>
    );
  }
}

class Notes extends Component {

  render() {
    const boxStyle = {
      width: '200px',
      height: '200px',
      margin: '10px',
      padding: '10px',
      borderRadius: '25px',
    };
  
    return (
      <div>
        <center>
          <div style={{ ...boxStyle, background: '#DABBFA' }}>
            <h2>School notes</h2>
          </div>
          <div style={{ ...boxStyle, background: '#D6F8F2' }}>
            <h2>Funny jokes</h2>
          </div>
          <div style={{ ...boxStyle, background: '#D6EDF8' }}>
            <h2>Travel bucket list</h2>
          </div>
          <div style={{ ...boxStyle, background: '#FEF4E1' }}>
            <h2>Random cooking ideas</h2>
          </div>
          <div style={{ width: '200px',
      height: '400px',
      margin: '10px',
      padding: '10px',
      borderRadius: '25px', background: '#FFFFFF' }}>        

          {/* START OF LIST */}

          <form>
            <h2 className="label-wrapper">
              <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
              </label>
            </h2>
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
              Add
            </button>
          </form>
          <div className="filters btn-group stack-exception">
            <button type="button" className="btn toggle-btn" aria-pressed="true">
              <span className="visually-hidden">Show </span>
              <span>all</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className="btn toggle-btn" aria-pressed="false">
              <span className="visually-hidden">Show </span>
              <span>Active</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className="btn toggle-btn" aria-pressed="false">
              <span className="visually-hidden">Show </span>
              <span>Completed</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <Todo />
            <Todo />
            <Todo />

          </div>

          {/* END OF LIST */}
          </div>
        </center>
      </div>
    );
  };
  }

  class List extends Component {

  render(){
    return(

      <div className="todoapp stack-large">
        <Search />
        <Header />
        <Notes />

        {/* /////////DONT FORGET TO UNCOMMENT USEFUL CODE!!!///////////////// */}

        <center>
          <form>
            <h2 className="label-wrapper">
              <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
              </label>
            </h2>
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
              Add
            </button>
          </form>
          <div className="filters btn-group stack-exception">
            <button type="button" className="btn toggle-btn" aria-pressed="true">
              <span className="visually-hidden">Show </span>
              <span>all</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className="btn toggle-btn" aria-pressed="false">
              <span className="visually-hidden">Show </span>
              <span>Active</span>
              <span className="visually-hidden"> tasks</span>
            </button>
            <button type="button" className="btn toggle-btn" aria-pressed="false">
              <span className="visually-hidden">Show </span>
              <span>Completed</span>
              <span className="visually-hidden"> tasks</span>
            </button>
          </div>
          <h2 id="list-heading">3 tasks remaining</h2>
          <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading">
            <Todo />
            <Todo />
            <Todo />
          </ul>

          <Footer />
        </center>
      </div>
    );



  }



  }


class App extends Component {
  render() {
    return (

      <div>
      <Search />
      <Header />
      <Notes />
      </div>
      

      // <div className="todoapp stack-large">
      //   <Search />
      //   <Header />
      //   <Notes />

      //   {/* /////////DONT FORGET TO UNCOMMENT USEFUL CODE!!!///////////////// */}

      //   <center>
      //     <form>
      //       <h2 className="label-wrapper">
      //         <label htmlFor="new-todo-input" className="label__lg">
      //           What needs to be done?
      //         </label>
      //       </h2>
      //       <input
      //         type="text"
      //         id="new-todo-input"
      //         className="input input__lg"
      //         name="text"
      //         autoComplete="off"
      //       />
      //       <button type="submit" className="btn btn__primary btn__lg">
      //         Add
      //       </button>
      //     </form>
      //     <div className="filters btn-group stack-exception">
      //       <button type="button" className="btn toggle-btn" aria-pressed="true">
      //         <span className="visually-hidden">Show </span>
      //         <span>all</span>
      //         <span className="visually-hidden"> tasks</span>
      //       </button>
      //       <button type="button" className="btn toggle-btn" aria-pressed="false">
      //         <span className="visually-hidden">Show </span>
      //         <span>Active</span>
      //         <span className="visually-hidden"> tasks</span>
      //       </button>
      //       <button type="button" className="btn toggle-btn" aria-pressed="false">
      //         <span className="visually-hidden">Show </span>
      //         <span>Completed</span>
      //         <span className="visually-hidden"> tasks</span>
      //       </button>
      //     </div>
      //     <h2 id="list-heading">3 tasks remaining</h2>
      //     <ul
      //       role="list"
      //       className="todo-list stack-large stack-exception"
      //       aria-labelledby="list-heading">
      //       <Todo />
      //       <Todo />
      //       <Todo />
      //     </ul>

      //     <Footer />
      //   </center>
      // </div>
    );
  }
}

export default App;
