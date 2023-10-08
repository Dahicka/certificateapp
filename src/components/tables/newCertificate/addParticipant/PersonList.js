import PersonListRow from "../../tableRow/PersonListRow";
import { useTranslation } from "react-i18next";

const PersonList = (props) => {
    const { t } = useTranslation();
    return (
        <table>
            <tr>
                <th></th>
                <th>{t("newParticipant.name")}</th>
                <th>{t("newParticipant.lastName")}</th>
                <th>{t("newParticipant.userID")}</th>
                <th>{t("newParticipant.department")}</th>
                <th>{t("newParticipant.plant")}</th>
            </tr>
            {props.personList ? (
                props.personList.map((object) => (
                    <PersonListRow key={object.personUserID}
                        person={object}
                        handleCheckBox={props.handleCheckBox}
                    ></PersonListRow>
                )
                )) : null}
        </table>
    );
};

export default PersonList;