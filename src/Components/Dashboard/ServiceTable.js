import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ServiceTable = ({service}) => {
    const {name,email,serviceTitle,status} = service
    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{email}</td>
            <td>{serviceTitle}</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td>
            <DropdownButton id="dropdown-basic-button" title={status}>
                        <Dropdown.Item >Pending</Dropdown.Item>
                        <Dropdown.Item >On going</Dropdown.Item>
                        <Dropdown.Item >Done</Dropdown.Item>
            </DropdownButton>
            </td>
        </tr>
    );
};

export default ServiceTable;