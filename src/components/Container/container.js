import React, { Component }from "react";
import NavBar from "../NavBar/nav";
import Search from "../Search/search";
import Profile from "../Profile/profile";
import API from "../../routes/api";


class Container extends Component {
  state = { 
    search: '',
    randomUser: [],
    profileList: [],
  };

  componentDidMount() {
    API.getRandomUser()
      .then((res) => {
        console.log(res);
        this.setState({
          randomUser: res.data.results,
          profileList: res.data.results
          });
      })
      .catch((err) => console.log(err));
  }

  // refreshPage() {
  //   window.location.reload(false);
  // }

  handleInputChange = (event) => {
 
    const value = event.target.value;
    this.setState({ search: value }); 
    };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getRandomUser(this.state.search)
    .then((res) => {
      this.setState({
        randomUser: res.data.results,
        profileList: res.data.results,
      });
    })
    .catch((err) => this.setState({ error: err.results }))
  };

  render() {
    return (
          <div className="container">
            <NavBar
            />
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <Profile
              state={this.state}
              />
          </div>
    );
  }
}

export default Container;
