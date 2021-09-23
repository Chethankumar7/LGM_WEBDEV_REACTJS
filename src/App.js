import Users from "./Components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
           <p class="text">Travel Bug<span>.</span></p>
            <button className="fetchbtn" onClick={this.updateState}>
            <b><i>Get Users</i></b>
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <div class="image">
          <img src="https://images.unsplash.com/45/Ss2c5MVASdGkVHOwG6n9_Imogene%20Pass.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80?auto=compress&cs=tinysrgb&h=350">


          </img>
        </div>
        
      </>
    );
  }
}

export default App;