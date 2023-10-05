import Header from "../components/header/Header";
import NavigationBar from "../components/navigation_bar/NavigationBar";
import React from "react";
import CertificateOverviewTable from "../components/tables/CertificateOverviewTable";
import { Grid } from "@mui/material";
import {Button} from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "../style.module.css";
import { Link } from "react-router-dom";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../DataBaseSettings";

const CertificateOverviewPage = () => {
    const {t} = useTranslation();
const allCertificates = useLiveQuery(() => db.certificates.toArray(), []);

  const addCertficateToDb = (event) => {
    event.preventDefault();
    db.certificates.add({
      supplier: "ANDEMIS GmbH, 1,Stuttgart",
      certificateType: "OHSAS 18001",
      validFrom: "18.08.2017",
      validTo: "24.08.2017",
    });
  };

  const removeCertficateFromDb = (id) => {
    console.log(id);
    db.certificates.delete(id);
  };

  const editCertificateFromDb = async (certificate) => {
      await db.certificates.update(certificate.id, {
        supplier: certificate.supplier,
        certificateType: certificate.certificateType,
        validFrom: certificate.validFrom,
        validTo: certificate.validTo,
      }) 
  }

  const getCertificateFromDb =(certificateId)=>{
    const foundedCertificate=allCertificates.find(certificate => certificate.id === certificateId)

  }
    return(
    <>
        <Header></Header>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start">
            <Grid item>
                <NavigationBar></NavigationBar>
            </Grid>
            <Grid item>
                <Button><Link className={styles.certificatebutton}
                        to = {"/certificate/newcertificate"}
                        style={{ 
                            textTransform: "none",
                            marginLeft: "23px",
                            color: "white",
                            textDecoration: "none" }}
                            >
                        {t("certificatePage.button")}
                    </Link></Button>
                <CertificateOverviewTable
                allCertificates={allCertificates}
                deleteCertificateFunction={removeCertficateFromDb}
                editCertificateFunction={editCertificateFromDb}
                getCertificateFunction={getCertificateFromDb}
                >
                </CertificateOverviewTable>
            </Grid>
        </Grid>
    </>
    );
}

export default CertificateOverviewPage;