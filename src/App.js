import React from "react";
import navBar from "./components/navBar";
import Search from "./components/Search";
import ProfileCard from "./components/ProfileCard";
import API from "./routes/api";


class App extends React.Component {
  state = { profiles: [], search: '' };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          profiles: res.data.results.map((e) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.medium,
            email: e.email,
            city: e.location.city,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  // refreshPage() {
  //   window.location.reload(false);
  // }

  searchProfile = (filter) => {
    console.log('Search', filter);
    const filteredList = this.state.profiles.filter((employee) => {   
      let values = Object.values(employee).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ profiles: filteredList });
  };

  handleInputChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('Handle ', this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Button Clicked', this.state.search, e);
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <Container>
        <div className="container">
          <div className="row">
            <Col size="md-4">
              <h2>Employee Directory</h2>
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </div>

          <div className="row">
            <Col size="md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                {[...this.state.profiles].map((item) => (
                  <ProfileCard
                    picture={item.picture}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    city={item.city}
                  />
                ))}
              </table>
            </Col>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;

