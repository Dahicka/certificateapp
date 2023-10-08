import { useTranslation } from "react-i18next";
import CertificateRow from "../tableRow/CertificateRow";

const CertificateOverviewTable = (props) => {
  const { t } = useTranslation();
  
  return (
    <table>
      <tr>
        <th></th>
        <th>{t("certificatePage.supplier")}</th>
        <th>{t("certificatePage.certificateType")}</th>
        <th>{t("certificatePage.validFrom")}</th>
        <th>{t("certificatePage.validTo")}</th>
      </tr>
      {props.allCertificates ? (
        props.allCertificates.map((object) => (
          <CertificateRow key={object.id}
            certificate={object}
            deleteCertificateFunction={props.deleteCertificateFunction}
          ></CertificateRow>
        ))
      ) : (null)}
    </table>
  );
};

export default CertificateOverviewTable;