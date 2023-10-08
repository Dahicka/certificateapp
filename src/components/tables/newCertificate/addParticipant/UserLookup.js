import { Button, Stack, Grid } from "@mui/material";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import styles from "../../../../style.module.css";
import PersonList from "./PersonList";
import { useTranslation } from "react-i18next";

const personList = [
  { personName: "Simon", personFirstName: "Zwolfer", personUserID: "ZWOELF", personDepartment: "ITM/FP", personPlant: "096" },
  { personName: "Wolfgang", personFirstName: "Stark", personUserID: "WOLFST", personDepartment: "ITM/FP", personPlant: "094" },
  { personName: "Alice", personFirstName: "Miller", personUserID: "ALIMIL", personDepartment: "MEF/FS", personPlant: "100" },
  { personName: "Emily", personFirstName: "Anderson", personUserID: "EMIAND", personDepartment: "ITM/FP", personPlant: "108" },
  { personName: "Maria", personFirstName: "Miller", personUserID: "MARMIL", personDepartment: "MEF/FS", personPlant: "124" },
  { personName: "Ava", personFirstName: "Zwolfer", personUserID: "AVAZWO", personDepartment: "MEF/FS", personPlant: "095" },
  { personName: "Maria", personFirstName: "Stark", personUserID: "MARSTA", personDepartment: "MEF/FP", personPlant: "112" },
];

const UserLookup = (props) => {
  const { t } = useTranslation();
  const [personNameValue, setPersonNameValue] = useState("");
  const [personFirstNameValue, setPersonFirstNameValue] = useState("");
  const [personUserIDValue, setPersonUserIDValue] = useState("");
  const [personDepartmentValue, setPersonDepartmentValue] = useState("");
  const [personPlantValue, setPersonPlantValue] = useState("");
  const [personListData, setPersonListData] = useState(personList);

  const filterPersonList = (
    searchNameValue,
    searchFirstNameValue,
    searchUserIDValue,
    searchDepartmentValue,
    searchPlantValue
  ) => {
    if (
      searchNameValue === "" &&
      searchFirstNameValue === "" &&
      searchUserIDValue === "" &&
      searchDepartmentValue === "" &&
      searchPlantValue === ""
    ) {
      return personList;
    }
    return personList.filter((personListObject) => {
      return (
        personListObject.personName.toLowerCase().includes(searchNameValue.toLowerCase()) &&
        personListObject.personFirstName.toLowerCase().includes(searchFirstNameValue.toLowerCase()) &&
        personListObject.personUserID.toLowerCase().includes(searchUserIDValue.toLowerCase()) &&
        personListObject.personDepartment.toLowerCase().includes(searchDepartmentValue.toLowerCase()) &&
        personListObject.personPlant.toLowerCase().includes(searchPlantValue.toLowerCase())
      );
    });
  };

  const [searchCriteria, setSearchCriteria] = useState(true);
  const handleSearchCriteria = () => {
    setSearchCriteria(!searchCriteria);
  };

  const [searchPerson, setSearchPerson] = useState(true);
  const handleSearchPerson = () => {
    setSearchPerson(!searchPerson);
  };

  const { register } = useForm();

  const onClickSearchButton = () => {
    const filteredPersons = filterPersonList(personNameValue, personFirstNameValue, personUserIDValue, personDepartmentValue, personPlantValue);
    setPersonListData(filteredPersons);
  }

  const handleFormReset = () => {
    setPersonNameValue("");
    setPersonFirstNameValue("");
    setPersonUserIDValue("");
    setPersonDepartmentValue("");
    setPersonPlantValue("");
    setPersonListData(personList);
  }

  const handleSelectForPersons = () => {
    const personsReadyForTable = allPersonsChecked.map(item => {
      const parts = item.split(';').map(part => part.trim());
      return {
        fullName: parts[0],
        department: parts[1],
        email: parts[2]
      };
    });
    props.handleCheckedParticipants(personsReadyForTable)
    props.onClose();
  }

  const [allPersonsChecked, setAllPersonsChecked] = useState([]);
  const handleCheckBox = (event) => {
    if (event.target.checked) {
      setAllPersonsChecked([...allPersonsChecked, event.target.value]);
    } else {
      setAllPersonsChecked(allPersonsChecked.filter((item) => item !== event.target.value));
    }
  }

  return (
    <>
      <div className={styles.divforsuppliers}>
        <Button onClick={handleSearchCriteria}
          style={{
            textTransform: "none",
            textDecoration: "none",
            justifyContent: "left",
            width: "100%",
            backgroundColor: "rgb(63, 154, 201)",
            borderRadius: "1px",
            color: "white"
          }}
        ><img src={require("../../../../resources/icons/menu/triangle_arrow_down.png")} width="7px" />
          &nbsp;{t("newParticipant.searchCriteria")}
        </Button>
        {searchCriteria ? (<Stack alignItems={"flex-start"}>

          <form className={styles.formsupplier}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <div className={styles.inputrow}>
                  <label className={styles.labelinputcertificate}>{t("newParticipant.name")}</label>
                  <input {...register("personname", { required: true })} className={styles.inputsupplier} value={personNameValue}
                    onChange={(event) => setPersonNameValue(event.target.value)} />
                </div></Grid>
              <Grid item xs={4}>
                <div className={styles.inputrow}>
                  <label className={styles.labelinputcertificate}>{t("newParticipant.lastName")}</label>
                  <input {...register("personfirstname", { required: true })} className={styles.inputsupplier} value={personFirstNameValue}
                    onChange={(event) => setPersonFirstNameValue(event.target.value)} />
                </div></Grid>
              <Grid item xs={4}>
                <div className={styles.inputrow}>
                  <label className={styles.labelinputcertificate}>{t("newParticipant.userID")}</label>
                  <input {...register("personuserid", { required: true })} className={styles.inputsupplier} value={personUserIDValue}
                    onChange={(event) => setPersonUserIDValue(event.target.value)} />
                </div></Grid>
              <Grid item xs={4}>
                <div className={styles.inputrow}>
                  <label className={styles.labelinputcertificate}>{t("newParticipant.department")}</label>
                  <input {...register("persondepartment", { required: true })} className={styles.inputsupplier} value={personDepartmentValue}
                    onChange={(event) => setPersonDepartmentValue(event.target.value)} />
                </div></Grid>
              <Grid item xs={4}>
                <div className={styles.inputrow}>
                  <label className={styles.labelinputcertificate}>{t("newParticipant.plant")}</label>
                  <input {...register("personplant", { required: true })} className={styles.inputsupplier} value={personPlantValue}
                    onChange={(event) => setPersonPlantValue(event.target.value)} />
                </div></Grid>
            </Grid>
          </form>

          <div className={styles.divforsuppliersbuttons}>
            <Button onClick={onClickSearchButton}
              style={{
                textTransform: "none",
                textDecoration: "none",
                width: "20%",
                backgroundColor: "rgb(38, 91, 122)",
                borderRadius: "1px",
                borderStyle: "solid",
                borderWidth: "thin",
                borderColor: "gray",
                marginLeft: "1%",
                marginBottom: "1%",
                color: "white"
              }}>
              {t("newParticipant.search")}</Button>
            <Button onClick={handleFormReset}
              style={{
                textTransform: "none",
                textDecoration: "none",
                width: "20%",
                borderStyle: "solid",
                borderWidth: "thin",
                borderColor: "gray",
                borderRadius: "1px",
                marginLeft: "1%",
                marginBottom: "1%",
                color: "black"
              }}>
              {t("newParticipant.reset")}</Button>
          </div>
        </Stack>) : null}
      </div>

      <div className={styles.divforsuppliers}>
        <Button onClick={handleSearchPerson}
          style={{
            textTransform: "none",
            textDecoration: "none",
            justifyContent: "left",
            width: "100%",
            backgroundColor: "rgb(63, 154, 201)",
            borderRadius: "1px",
            color: "white"
          }}
        ><img src={require("../../../../resources/icons/menu/triangle_arrow_down.png")} width="7px" />
          &nbsp;{t("newParticipant.personList")}
        </Button>
        {searchPerson ? (<Stack alignItems={"flex-start"}>
          <div > <PersonList
            handleCheckBox={handleCheckBox}
            personList={personListData}>
          </PersonList></div>

          <div className={styles.divforsuppliersbuttons}>
            <Button
              onClick={handleSelectForPersons}
              style={{
                textTransform: "none",
                textDecoration: "none",
                width: "20%",
                backgroundColor: "rgb(240, 208, 147)",
                borderRadius: "1px",
                borderStyle: "solid",
                borderWidth: "thin",
                borderColor: "gray",
                marginLeft: "1%",
                marginBottom: "1%",
                color: "white"
              }}>
              {t("newParticipant.select")}</Button>
            <Button onClick={props.onClose}
              style={{
                textTransform: "none",
                textDecoration: "none",
                width: "20%",
                borderStyle: "solid",
                borderWidth: "thin",
                borderColor: "gray",
                borderRadius: "1px",
                marginLeft: "1%",
                marginBottom: "1%",
                color: "black"
              }}>
              {t("newParticipant.cancel")}</Button></div>
        </Stack>) : null}
      </div>
    </>
  );
};

export default UserLookup;