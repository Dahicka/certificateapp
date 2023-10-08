const AddParticipantRow = (props) => {
    const handleRemoveUserFromCertificate = () => {
        props.handleRemoveUserFromCertificate(props.fullName)
    }
    return (
        <tr>
            <td><button
                type="button"
                onClick={handleRemoveUserFromCertificate}
                style={{
                    border: "none",
                    backgroundColor: "white"
                }}
            ><img src={require("../../../resources/icons/certificate/close.png")} width={"10px"} /></button></td>
            <td>{props.fullName}</td>
            <td>{props.department}</td>
            <td>{props.email}</td>
        </tr>
    );
}
export default AddParticipantRow;