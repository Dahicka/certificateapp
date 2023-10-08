import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import styles from "../../../../style.module.css";
import SupplierList from "./SupplierList";
import { useTranslation } from "react-i18next";

const supplierList = [
  { supplierName: "ANDEMIS GmbH", supplierIndex: "1", supplierCity: "Stuttgart" },
  { supplierName: "DAIMLER AG", supplierIndex: "1", supplierCity: "Berlin" },
  { supplierName: "Hurra Communications GmbH", supplierIndex: "2", supplierCity: "Stuttgart" },
  { supplierName: "VNG AG", supplierIndex: "3", supplierCity: "Leipzig" },
];

const SearchForSuppliersForm = (props) => {
  const { t } = useTranslation();

  const [searchCriteria, setSearchCriteria] = useState(true);
  const handleSearchCriteria = () => {
    setSearchCriteria(!searchCriteria);
  };
  const [searchSupplier, setSearchSupplier] = useState(true);
  const handleSearchSupplier = () => {
    setSearchSupplier(!searchSupplier);
  };
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [supplierNameValue, setSupplierNameValue] = useState("");
  const [supplierIndexValue, setSupplierIndexValue] = useState("");
  const [supplierCityValue, setSupplierCityValue] = useState("");
  const [supplierListData, setSupplierListData] = useState(supplierList);

  const filterSupplierList = (
    searchNameValue,
    searchIndexValue,
    searchCityValue
  ) => {
    if (
      searchNameValue === "" &&
      searchIndexValue === "" &&
      searchCityValue === ""
    ) {
      return supplierList;
    }
    return supplierList.filter((supplierListObject) => {
      return (
        supplierListObject.supplierName
          .toLowerCase()
          .includes(searchNameValue.toLowerCase()) &&
        supplierListObject.supplierIndex
          .toLowerCase()
          .includes(searchIndexValue.toLowerCase()) &&
        supplierListObject.supplierCity.toLowerCase().includes(searchCityValue.toLowerCase())
      );
    });
  };

  const onClickSearchButton = () => {

    const filteredSuppliers = filterSupplierList(supplierNameValue, supplierIndexValue, supplierCityValue);
    console.log(filteredSuppliers)
    setSupplierListData(filteredSuppliers);
  }

  const handleFormReset = () => {
    setSupplierNameValue("");
    setSupplierIndexValue("");
    setSupplierCityValue("");
    setSupplierListData(supplierList);
  }

  const [radioValue, setRadioValue] = useState("");
  const handleRadio = (event) => {
    console.log(event.target.value)
    setRadioValue(event.target.value);
  }

  const handleSelect = () => {
    props.handleRadio(radioValue);
    props.onClose();
  }

  return (
    <>
      <div className={styles.divforsuppliers}>
        <Button onClick={handleSearchCriteria}
          style={{
            textTransform: "none",
            textDecoration: "none",
            justifyContent: "left",
            width: "800px",
            backgroundColor: "rgb(63, 154, 201)",
            borderRadius: "1px",
            color: "white"
          }}
        ><img src={require("../../../../resources/icons/menu/triangle_arrow_down.png")} width="7px" />
          &nbsp;Search criteria
        </Button>
        {searchCriteria ? (<Stack alignItems={"flex-start"}>

          <form className={styles.formsupplier}>
            <div className={styles.inputrow}>
              <label className={styles.labelinputcertificate}>{t("certificatePage.supplierName")}</label>
              <input {...register("suppliername", { required: true })} className={styles.inputsupplier} value={supplierNameValue}
                onChange={(event) => setSupplierNameValue(event.target.value)} />
            </div>

            <div className={styles.inputrow}>
              <label className={styles.labelinputcertificate}>{t("certificatePage.supplierIndex")}</label>
              <input {...register("supplierindex", { required: true })} className={styles.inputsupplier} value={supplierIndexValue}
                onChange={(event) => setSupplierIndexValue(event.target.value)} />
            </div>

            <div className={styles.inputrow}>
              <label className={styles.labelinputcertificate}>{t("certificatePage.supplierCity")}</label>
              <input {...register("suppliercity", { required: true })} className={styles.inputsupplier} value={supplierCityValue}
                onChange={(event) => setSupplierCityValue(event.target.value)} />
            </div>

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
        <Button onClick={handleSearchSupplier}
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
          &nbsp;{t("newParticipant.supplierList")}
        </Button>
        {searchSupplier ? (<Stack alignItems={"flex-start"}>
          <div > <SupplierList
            handleRadio={handleRadio}
            supplierList={supplierListData}
          ></SupplierList></div>

          <div className={styles.divforsuppliersbuttons}>
            <Button
              onClick={handleSelect}
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
}

export default SearchForSuppliersForm;