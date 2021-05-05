import React, { Component }from "react";
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
        console.log(res.data)
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
    // API.getRandomUser(this.state.search)
    // .then((res) => {
    //   this.setState({
    //     randomUser: res.data.results,
    //     profileList: res.data.results,
    //   });
    // })
    // .catch((err) => this.setState({ error: err.results }))
  };

  profileList = (input) => {
    if (input) {
      this.setState({
        profileList: this.state.randomUser.filter((profile) => {
          return (
            profile.picture.medium ||
            profile.name.first
              .toLowerCase()
              .concat(" ", profile.name.last.toLowerCase())
              .includes(input) ||
            profile.email.includes(input) ||
            profile.dob.age.includes(input) ||
            profile.location.city.includes(input)
          );
        }),
      });
    } else {
      this.setState({ profileList: this.state.randomUser });
    }
  };

  render() {
    console.log(this.state)
    return (
          <div className="container">
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <Profile
              state={this.state}
              profileList = {this.state.profileList}
              randomUser = {this.state.randomUser}
              />
          </div>
    );
  }
}

export default Container;
