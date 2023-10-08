import SupplierListRow from "../../tableRow/SupplierListRow";
import { useTranslation } from "react-i18next";

const SupplierList = (props) => {
    const { t } = useTranslation();
    return (
        <table>
            <tr>
                <th></th>
                <th>{t("certificatePage.supplierName")}</th>
                <th>{t("certificatePage.supplierIndex")}</th>
                <th>{t("certificatePage.supplierCity")}</th>
            </tr>

            {props.supplierList.map((object) => (
                <SupplierListRow key={object.id}
                    supplier={object}
                    handleRadio={props.handleRadio}
                ></SupplierListRow>
            )
            )}
        </table>
    );
};

export default SupplierList;