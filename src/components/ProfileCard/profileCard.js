import React from 'react';

function ProfileCard(props) {
  return (
    <thead>
      <tr>
        <th>
          <img alt={props.firstName} src={props.picture} />
        </th>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.email}</td>
        <td>{props.city}</td>
      </tr>
    </thead>
  );
}

export default ProfileCard;