import Header from "../components/header/Header";
import NavigationBar from "../components/navigation_bar/NavigationBar";
import React, { useState } from "react";
import CertificateOverviewTable from "../components/tables/certificateOverview/CertificateOverviewTable";
import { Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "../style.module.css";
import { Link } from "react-router-dom";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../DataBaseSettings";

const CertificateOverviewPage = () => {
    const { t } = useTranslation();
    
    const allCertificates = useLiveQuery(() => db.certificates.toArray(), []);

    const removeCertficateFromDb = (id) => {
        db.certificates.delete(id);
    };

    return (
        <>
            <Header>
            </Header>
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
                        to={"/certificate/newcertificate"}
                        style={{
                            textTransform: "none",
                            marginLeft: "23px",
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        {t("certificatePage.newCertificate")}
                    </Link></Button>
                    <CertificateOverviewTable
                        allCertificates={allCertificates}
                        deleteCertificateFunction={removeCertficateFromDb}
                    >
                    </CertificateOverviewTable>
                </Grid>
            </Grid>
        </>
    );
}

export default CertificateOverviewPage;