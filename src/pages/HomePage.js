import React from "react";
import Header from "../components/header/Header";
import NavigationBar from "../components/navigation_bar/NavigationBar";
import { useTranslation } from "react-i18next";
import styles from "../style.module.css";

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Header></Header>
            <div style={{ display: "flex" }}>
                <NavigationBar></NavigationBar>
                <h1 className={styles.startcontet}>{t("navigationBar.start")}</h1>
            </div>
        </>
    );
};

export default HomePage;