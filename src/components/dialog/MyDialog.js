import { DialogContent, Dialog } from "@mui/material";
import SearchForSuppliersForm from "../tables/newCertificate/searchForSuppliers/SearchForSuppliersForm";
import { useTranslation } from "react-i18next";

const MyDialog = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose} fullWidth={true}
        maxWidth={"900px"}>
        <div
          style={{ border: "1px solid black", margin: "5px", height: "25px", paddingTop: "5px", paddingLeft: "10px", backgroundColor: "rgb(245, 245, 245)" }}>
          {t("newParticipant.searchForSuppliers")}
          <button onClick={props.onClose}
            style={{ width: "100px", height: "18px", marginLeft: "82.5%" }}
          ><img src={require("../../resources/icons/certificate/close.png")}
            width="9px" /></button>
        </div>
        <DialogContent>
          <SearchForSuppliersForm
            handleRadio={props.handleRadio}
            onClose={props.onClose}
          ></SearchForSuppliersForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyDialog;