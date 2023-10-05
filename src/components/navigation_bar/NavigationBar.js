import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React from "react";
import { useState } from "react";
import { List, ListItemText, rgbToHex } from "@mui/material";
import { red } from "@mui/material/colors";
import styles from "../../style.module.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
    const {t} = useTranslation();
    const[menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }; 
    const location = useLocation();
    const[isStartPage, setIsStartPage] = useState(true);
    const handleStartPage = () => {
        setIsStartPage(!isStartPage);
    };

    return (
        <div className={styles.menu}>
            <Stack spacing={1} alignItems={"flex-start"} sx = {{ marginLeft: "5%"}}>
                <Button><img src = {
                    location.pathname == '/' ? require("../../resources/icons/home/home_lightblue.png") :
                    require("../../resources/icons/home/home_darkblue.png")} width = "25px"/>
                    <Link
                        to = {'/'}
                        style={{ 
                            textTransform: "none",
                            color: location.pathname == '/' ? "rgb(63, 154, 201)" : "rgb(39, 86, 109)",
                            marginLeft: "10px",
                            textDecoration: "none" }}
                            >
                        {t("navigationBar.start")}
                    </Link>
                    
                </Button>
                <Button onClick = {handleMenu} 
                style={{ 
                    textTransform: "none",
                    textDecoration: "none",
                    justifyContent: "left",
                    width: "100%",
                    color: "rgb(39, 86, 109)" 
                    }}>
                <img src = {require("../../resources/icons/menu/menu_darkblue.png")} width = "30px" style ={{marginRight: "7px"}}/>
                {t("navigationBar.machineLearning")}
                <span>
                <img src = {require("../../resources/icons/menu/arrow_down.png")} width = "10px" style ={{marginLeft: "110px"}}/>
                </span>
                </Button>
                    {menu ? (<Stack alignItems={"flex-start"}>  
                        <Link
                            to={'/certificate'}
                            style={{ 
                            textTransform: "none",
                            textDecoration: "none", 
                            marginLeft: "45px",
                            fontSize: "0.8em",
                            color: location.pathname == '/certificate' ? "rgb(63, 154, 201)" : "rgb(39, 86, 109)" }}>
                            {t("navigationBar.example1")}
                        </Link>
                        <Link
                            to={'/example1'}
                            style={{ 
                            textTransform: "none",
                            textDecoration: "none", 
                            marginLeft: "45px",
                            fontSize: "0.8em",
                            color: location.pathname == '/example2' ? "rgb(63, 154, 201)" : "rgb(39, 86, 109)" }}>
                            {t("navigationBar.example2")}
                        </Link>
                        <Link
                            to={'/example1'}
                            style={{ 
                            textTransform: "none",
                            textDecoration: "none", 
                            marginLeft: "45px",
                            fontSize: "0.8em",
                            color: "rgb(39, 86, 109)" }}>
                            {t("navigationBar.example3")}
                        </Link>
                    </Stack> ) : null}
            </Stack>
        </div>
    );
}

export default NavigationBar;