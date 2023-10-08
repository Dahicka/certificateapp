import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React,{ useState } from "react";
import styles from "../../style.module.css";
import { useLocation,Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
    const { t } = useTranslation();
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };
    const location = useLocation();

    return (
        <div className={styles.menu}>
            <Stack spacing={1} alignItems={"flex-start"}>
                <Button sx={{
                    borderLeft: location.pathname == '/' ? "10px solid rgb(63, 154, 201)" : null,
                    borderRadius: "1px"
                }}><img src={
                    location.pathname == '/' ? require("../../resources/icons/home/home_lightblue.png") :
                        require("../../resources/icons/home/home_darkblue.png")} width="25px"
                    style={{ marginLeft: location.pathname == '/' ? null : "10px" }} />
                    <Link
                        to={'/'}
                        style={{
                            textTransform: "none",
                            color: location.pathname == '/' ? "rgb(63, 154, 201)" : "rgb(39, 86, 109)",
                            marginLeft: "10px",
                            textDecoration: "none"
                        }}
                    >
                        {t("navigationBar.start")}
                    </Link>
                </Button>
                <Button onClick={handleMenu}
                    style={{
                        textTransform: "none",
                        textDecoration: "none",
                        justifyContent: "left",
                        width: "100%",
                        color: "rgb(39, 86, 109)",
                        borderRadius: "1px",
                        borderLeft: location.pathname == '/certificate' ? "10px solid rgb(63, 154, 201)" : null
                    }}>
                    <img src={require("../../resources/icons/menu/menu_darkblue.png")} width="30px" style={{
                        marginRight: "7px",
                        marginLeft: location.pathname == '/certificate' ? null : "8px"
                    }} />
                    {t("navigationBar.machineLearning")}
                    <span>
                        <img src={require("../../resources/icons/menu/arrow_down.png")} width="10px" style={{ marginLeft: "110px" }} />
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
                            color: location.pathname == '/certificate' ? "rgb(63, 154, 201)" : "rgb(39, 86, 109)"
                        }}>
                        {t("navigationBar.example1")}
                    </Link>
                    <Link
                        style={{
                            textTransform: "none",
                            textDecoration: "none",
                            marginLeft: "45px",
                            fontSize: "0.8em",
                            color: location.pathname == '/example2' ? "rgb(63, 154, 201)" : "rgb(39, 86, 109)"
                        }}>
                        {t("navigationBar.example2")}
                    </Link>
                    <Link
                        style={{
                            textTransform: "none",
                            textDecoration: "none",
                            marginLeft: "45px",
                            fontSize: "0.8em",
                            color: "rgb(39, 86, 109)"
                        }}>
                        {t("navigationBar.example3")}
                    </Link>
                </Stack>) : null}
            </Stack>
        </div>
    );
}

export default NavigationBar;