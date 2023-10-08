import { DialogContent, Dialog } from "@mui/material";
import UserLookup from "../tables/newCertificate/addParticipant/UserLookup";
import { useTranslation } from "react-i18next";

const MyDialogAddParticipant = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose} fullWidth={true}
        maxWidth={"900px"}>
        <div
          style={{ border: "1px solid black", margin: "5px", height: "25px", paddingTop: "5px", paddingLeft: "10px", backgroundColor: "rgb(245, 245, 245)" }}>
          {t("newParticipant.searchForPersons")}
          <button onClick={props.onClose}
            style={{ width: "100px", height: "18px", marginLeft: "82.5%" }}
          ><img src={require("../../resources/icons/certificate/close.png")}
            width="9px" /></button>
        </div>
        <DialogContent>
          <UserLookup
            handleCheckedParticipants={props.handleCheckedParticipants}
            handleCheckBox={props.handleCheckBox}
            onClose={props.onClose}
          ></UserLookup>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyDialogAddParticipant;