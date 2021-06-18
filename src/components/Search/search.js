import React from "react";


const Search = (props) => {
  // Setting the component's initial state

  return (
    <nav className="navbar navbar-dark bg-light justify-content-center">
      <form className="form-inline m-8" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search for an employee"
        />
      </form>
    </nav>
  );
};

export default Search;

