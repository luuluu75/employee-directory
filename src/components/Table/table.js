import React from "react";
import Row from "../Profile/profile";

function Table(props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th one = "col" type = "column header"><span>Profile</span></th>
                <th one = "col" type = "column header"><span>Name</span></th>
                <th one = "col" type = "column header"><span>Email</span></th>
                <th one = "col" type = "column header"><span>City</span></th>
                <th one = "col" type = "column header"><span>Age</span></th>
            </tr>
            </thead>
            
            <Row randomUser={props.state}/>
        </table>
    )
}

export default Table