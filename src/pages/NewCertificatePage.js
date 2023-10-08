import NewCertificate from "../components/tables/newCertificate/NewCertificate";
import Header from "../components/header/Header";
import NavigationBar from "../components/navigation_bar/NavigationBar";
import React from "react";
import { Grid } from "@mui/material";

const NewCertificatePage = () => {
    return (
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