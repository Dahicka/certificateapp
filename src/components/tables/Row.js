import { createFactory, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Row = (props) => {
    
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = (id) => {
    console.log(id)
    props.deleteCertificateFunction(id)
    setAnchorEl(null);
  };

  const mapCertificateTypeToCertificateName = (certificateType) => {
    switch(parseInt(certificateType)){
      case 1:
        return "CCC certificate";
      case 2:
        return "Permission of Printing";
      case 3:
        return "OHSAS 18001";
      default:
          return "Unknown certificate";
    }
  };
  const handleEdit = (certificate) => {
    
    navigate(`/certificate/editCertficate/${certificate.id}`,{ state: { "certificate": certificate } });
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <tr>
      <td>
        <IconButton onClick={handleClick}>
          <img src={require("../../resources/icons/certificate/gearbutton.png")} />{" "}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={()=>{handleEdit(props.certificate)}}>Edit</MenuItem>
          <MenuItem onClick={()=>{handleDelete(props.certificate.id)}}>Delete</MenuItem>
        </Menu>
      </td>
      <td>{props.certificate.supplier}</td>
      <td>{mapCertificateTypeToCertificateName(props.certificate.certificateType)}</td>
      <td>{(new Date(props.certificate.validFrom)).toLocaleDateString("en-GB")}</td>
      <td>{(new Date(props.certificate.validTo)).toLocaleDateString("en-GB")}</td>
    </tr>
  );
};
export default Row;