import { useTranslation } from "react-i18next";
import { Button, IconButton } from "@mui/material";
import styles from "../../style.module.css";
import {MenuItem} from "@mui/material";
import {Menu} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Row from "./Row";

const CertificateOverviewTable = (props) => {
    const location = useLocation();
    const {t} = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    return(
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
          <Row key={object.id}
            certificate={object}
            deleteCertificateFunction={props.deleteCertificateFunction}
            editCertificateFunction={props.editCertificateFunction}
            getCertificateFunction={props.getCertificateFunction}
          ></Row>
        ))
      ) : (
        <caption>Nema certfikata za prikazat</caption>
      )}
        
    </table>
    );
};

export default CertificateOverviewTable;