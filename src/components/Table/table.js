import React from "react";
import Row from "../Profile/profile";

function Table(props) {
    return (
        <table className="table">
            <tr>
                <th one = "col" type = "column header">Profile</th>
                <th one = "col" type = "column header">Name</th>
                <th one = "col" type = "column header">Email</th>
                <th one = "col" type = "column header">City</th>
                <th one = "col" type = "column header">Age</th>
            </tr>

            <Row randomUser={props.state}/>
        </table>
    )
}

export default Table