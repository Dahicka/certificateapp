const PersonListRow = (props) => {
    return (
        <tr>
            <td><input type="checkbox"
                value={props.person.personName + ", " + props.person.personFirstName +
                    " (" + props.person.personPlant + ");" + props.person.personDepartment + ";" + props.person.personName.toLowerCase() + "@mail.com"}
                onChange={props.handleCheckBox} /></td>
            <td>{props.person.personName}</td>
            <td>{props.person.personFirstName}</td>
            <td>{props.person.personUserID}</td>
            <td>{props.person.personDepartment}</td>
            <td>{props.person.personPlant}</td>
        </tr>
    );
};

export default PersonListRow;