import styles from "../../style.module.css";
import React from "react";
import {useTranslation} from "react-i18next";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Select,MenuItem } from "@mui/material";
import { useState } from "react";

const Header = () => {
    const { t, i18n } = useTranslation();
    const lngs = {
    en: { nativeName: "English" },
    ba: { nativeName: "Bosanski" }
  };
    const[language, setLanguage] = useState("English");
    const handleLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        setLanguage(event.target.value);
    };

    return( <>
    <div className = {styles.header}>
    <div className = {styles.headerlogo}>DCCS Tuzla</div>
        <div className={styles.languageswitch}>
        <label for = "languageswitch">{t("navigationBar.language")}</label>
      <select value={language} onChange={handleLanguage} id="languageswitch">
      {Object.keys(lngs).map((lng) => (
          <option
            value = {lng}
            key={lng}
          >
            {lngs[lng].nativeName}
          </option>))}
      </select>
      </div>
    </div>
    </>);
};

export default Header;