import styles from "../../style.module.css";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import UserContext from "../../store/user-context";

const Header = () => {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "English" },
    ba: { nativeName: "Bosanski" }
  };
  const handleLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  };

  const ctxData = useContext(UserContext);
  const handleUser = (user) => {
    ctxData.setSelectedUser(user);
  }

  return (
  <>
    <div className={styles.header}>
      <div className={styles.headerlogo}>DCCS Tuzla</div>
      <div className={styles.languageswitch}>
        <label for="languageswitch">{t("navigationBar.language")}</label>
        <select value={i18n.language} onChange={handleLanguage} id="languageswitch">
          {Object.keys(lngs).map((lng) => (
            <option
              value={lng}
              key={lng}
            >
              {lngs[lng].nativeName}
            </option>))}
        </select>
        &nbsp;
        <label for="user">{t("navigationBar.user")}</label>
        <select value={ctxData.selectedUser} onChange={(event) => handleUser(event.target.value)} id="user">
          <option value={"user1"}>User 1</option>
          <option value={"user2"}>User 2</option>
          <option value={"user3"}>User 3</option>
          <option value={"user4"}>User 4</option>
        </select>
      </div>
    </div>
  </>
  );
};

export default Header;