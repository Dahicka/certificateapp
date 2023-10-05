import NewCertificate from "../components/tables/NewCertificate";
import Header from "../components/header/Header";
import NavigationBar from "../components/navigation_bar/NavigationBar";
import React from "react";
import { Grid } from "@mui/material";
import {Button} from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "../style.module.css";
import { Link } from "react-router-dom";

const NewCertificatePage = () => {
    const {t} = useTranslation();
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
                <NewCertificate />
            </Grid>
        </Grid>
    </>
    );
}

export default NewCertificatePage;