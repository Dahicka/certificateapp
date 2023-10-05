import styles from "../../style.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller} from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import { ErrorFormField } from "./errors/ErrorFormField";
import { useLocation } from "react-router-dom";
import db from "../../DataBaseSettings";
import { useNavigate } from "react-router-dom";


const EditCertificate = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
const [selectedDateFrom, setSelectedDateFrom] = useState();
const [selectedDateTo, setSelectedDateTo] = useState();
const {t} = useTranslation();
const { register,control, formState: { errors }, handleSubmit } = useForm({defaultValues: {
  supplier: state.certificate.supplier,
  certificateType: state.certificate.certificateType,
  validFrom: state.certificate.validFrom,
  validTo: state.certificate.validTo
}
});
const onSubmit = (data) => {
     db.certificates.update(state.certificate.id, {  supplier: data.supplier,
    certificateType: data.certificateType,
    validFrom: data.validFrom,
    validTo: data.validTo})
    navigate(`/certificate`);

  };

 

return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.h3NewCertificate}>{t("certificatePage.button")}</h3>
        <label className={styles.labelinputcertificate}>{t("certificatePage.supplier")}</label>
        <input {...register("supplier", { required: true })}/>
        <ErrorFormField errors={errors.supplier} />

        <label className={styles.labelinputcertificate}>{t("certificatePage.certificateType")}</label>
        <select className={styles.certificatetype}{...register('certificateType', { required: true })}>
           <option value="" disabled selected>Select your option</option>
           <option value="1">CCC certificate</option>
           <option value="2">Permission of Printing</option>
           <option value="3">OHSAS 18001</option>
       </select>
       <ErrorFormField errors={errors.certificateType} />

        <label className={styles.labelinputcertificate}>{t("certificatePage.validFrom")}</label>
        <Controller
        control={control}
        name="validFrom"
        rules={{required: true}}
        render={({ field }) => (
          <DatePicker placeholderText="Click to select date" {...register('validFrom', { required: selectedDateFrom === undefined ? "Required" : false })} 
          selected={field.value}
          onChange={(date) => field.onChange(date)}
          autoComplete="off"
        />
        )}
        />
        {errors.validFrom && (
        <span className={styles.errorFormField}>
        {errors.validFrom.type === "required" ? "Required" : ""}
        </span>
        )}

        <label className={styles.labelinputcertificate}>{t("certificatePage.validTo")}</label>
        <Controller
        control={control}
        name="validTo"
        rules={{required: true}}
        render={({ field }) => (
        <DatePicker placeholderText="Click to select date" {...register('validTo', { required: selectedDateTo === undefined ? "Required" : false})}
        selected={field.value}
        onChange={(date) => field.onChange(date)}
        autoComplete="off"
        />
        )}
        />
       {errors.validTo && (
        <span className={styles.errorFormField}>
        {errors.validTo.type === "required" ? "Required" : ""}
        </span>
        )}

        <Button type="submit" sx={{
            backgroundColor: "red",
            color: "white",
            fontSize: "14px",
            margin:" 20px 0px"
        }}>Submit</Button>
  
    </form>
);
}

export default EditCertificate;