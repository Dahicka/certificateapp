import AddParticipantRow from "../../tableRow/AddParticipantRow";
import { useTranslation } from "react-i18next";
import styles from "../../../../style.module.css";

const AddParticipantTable = (props) => {
    const { t } = useTranslation();
    
    return (
        <table className={styles.tableForAddParticipant}>
            <tr>
                <th></th>
                <th>{t("newParticipant.name")}</th>
                <th>{t("newParticipant.department")}</th>
                <th>{t("newParticipant.email")}</th>
            </tr>
            {
                props.checkedParticipants ?
                    (props.checkedParticipants.map((object) => (
                        <AddParticipantRow
                            handleRemoveUserFromCertificate={props.handleRemoveUserFromCertificate}
                            fullName={object.fullName}
                            department={object.department}
                            email={object.email}
                        >
                        </AddParticipantRow>
                    ))) : null
            }
        </table>
    );
}
export default AddParticipantTable;