import styles from "../../../style.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import { ErrorFormField } from "../errors/ErrorFormField";
import { useLocation, useNavigate } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import MyDialog from "../../dialog/MyDialog";
import MyDialogAddParticipant from "../../dialog/MyDialogAddParticipant";
import AddParticipantTable from "./addParticipant/AddParticipantTable";
import UserContext from "../../../store/user-context";
import UserCommentList from "./UserCommentList";

const EditCertificate = (props) => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const [selectedDateTo, setSelectedDateTo] = useState();

  const { t } = useTranslation();
  const { register, control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      supplier: state.certificate.supplier,
      certificateType: state.certificate.certificateType,
      validFrom: state.certificate.validFrom,
      validTo: state.certificate.validTo
    }
  });
  const onSubmit = (data) => {

    data.supplier = supplierValue
    const dataForUpdate = {
      ...data,
      participants: checkedParticipants,
      id: state.certificate.id,
      comments: listOfComments
    }
    props.updateCertificate(dataForUpdate)
    navigate("/certificate");
  }

  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogPerson, setOpenDialogPerson] = useState(false);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClickOpenDialogPersons = () => {
    setOpenDialogPerson(true);
  };

  const handleCloseDialogPersons = () => {
    setOpenDialogPerson(false);
  };

  const [supplierValue, setSupplierValue] = useState(state.certificate.supplier);

  const handleChangeSetSupplier = (event) => {
    setSupplierValue(event.target.value);
  };
  const handleClickDeleteSetSupplier = () => {
    setSupplierValue('');
  };
  const handleRadioChangeSetSupplier = (pickedSupplier) => {
    setSupplierValue(pickedSupplier)
  };

  const [checkedParticipants, setCheckedParticipants] = useState(state.certificate.participants);
  const handleCheckedParticipants = (participants) => {
    setCheckedParticipants(participants);
  }

  const handleRemoveUserFromCertificate = (fullName) => {
    setCheckedParticipants(prevParticipants => prevParticipants.filter(prevParticipant => prevParticipant.fullName !== fullName))
  }

  const [comment, setComment] = useState(false);
  const handleComment = () => {
    setComment(!comment);
  };

  const ctxData = useContext(UserContext);

  const [listOfComments, setListOfComments] = useState(state.certificate.comments)

  const [textAreaComment, setTextAreaComment] = useState("")
  const handleSetTextAreaComment = (event) => {
    setTextAreaComment(event.target.value)
  }
  const handleNewComment = () => {
    const newComment = { user: ctxData.selectedUser, comment: textAreaComment }
    console.log(newComment)
    setListOfComments(prevState => [...prevState, newComment]);
    setTextAreaComment("")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.h3NewCertificate}>{t("certificatePage.editCertificate")}</h3>

        <label className={styles.labelinputcertificate}>{t("certificatePage.supplier")}</label>
        <InputGroup>
          <input {...register("supplier", { required: true })} style={{ width: "425px" }}
            onChange={handleChangeSetSupplier}
            value={supplierValue}
          />
          <button type="button"
            onClick={handleClickOpenDialog}
            className={styles.buttoninsupplier}
          ><img src={require("../../../resources/icons/certificate/searchicon.png")}
            width="12px" /></button>

          <button type="button"
            onClick={handleClickDeleteSetSupplier}
            className={styles.buttoninsupplier}
          ><img src={require("../../../resources/icons/certificate/close.png")}
            width="9px" /></button>
        </InputGroup>
        <ErrorFormField errors={errors.supplier} />

        <label className={styles.labelinputcertificate}>{t("certificatePage.certificateType")}</label>
        <select className={styles.certificatetype}{...register('certificateType', { required: true })}>
          <option value="" disabled selected>{t("certificatePage.selectYourOption")}</option>
          <option value="1">CCC certificate</option>
          <option value="2">Permission of Printing</option>
          <option value="3">OHSAS 18001</option>
        </select>
        <ErrorFormField errors={errors.certificateType} />

        <label className={styles.labelinputcertificate}>{t("certificatePage.validFrom")}</label>
        <Controller
          control={control}
          name="validFrom"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker placeholderText={t("certificatePage.selectDate")} {...register('validFrom', { required: selectedDateFrom === undefined ? "Required" : false })}
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
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker placeholderText={t("certificatePage.selectDate")} {...register('validTo', { required: selectedDateTo === undefined ? "Required" : false })}
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
          backgroundColor: "rgb(63, 154, 201)",
          color: "white",
          fontSize: "14px",
          width: "50px",
          margin: " 20px 0px",
          ml: 1,
          '&:hover': {
            color: "black",
            background: "gray"
          },
        }}>{t("certificatePage.submit")}</Button>

        <label style={{
          marginLeft: "310px"
        }}>{t("certificatePage.assignedUsers")}</label>
        <button onClick={handleClickOpenDialogPersons} type="button"
          className={styles.buttonaddparticipant}><img src={require("../../../resources/icons/certificate/searchicon.png")} width={"10px"} />
          {t("certificatePage.addParticipant")}</button>

        <AddParticipantTable
          handleRemoveUserFromCertificate={handleRemoveUserFromCertificate}
          checkedParticipants={checkedParticipants}
        ></AddParticipantTable>
      </form>
      <Button onClick={handleComment}
        type="button"
        sx={{
          color: "white",
          backgroundColor: "rgb(63, 154, 201)",
          width: "200px",
          borderRadius: "1px",
          textDecoration: "none",
          textTransform: "none",
          marginLeft: "72%",
          marginBottom: "2%",
          '&:hover': {
            color: "black",
            background: "gray"
          },
        }}
      >{t("certificatePage.newComment")}</Button>
      {listOfComments ? <UserCommentList
        listOfComments={listOfComments}
      ></UserCommentList> : null}
      {comment ? (
        <div style={{
          border: "solid 1px",
          width: "100%",
          height: "100%",
          marginBottom: "5%"
        }}>
          <label className={styles.labelforcomment}>
            {ctxData.selectedUser}
          </label>
          <textarea onChange={handleSetTextAreaComment}
            name="comment" cols="70" rows="10" placeholder={t("certificatePage.comment")} value={textAreaComment}
            style={{ resize: 'none', marginLeft: "1%", width: "93%" }}
          ></textarea>
          <Button
            type="button"
            onClick={handleNewComment}
            sx={{
              color: "white",
              backgroundColor: "red",
              width: "200px",
              borderRadius: "1px",
              textDecoration: "none",
              textTransform: "none",
              marginLeft: "1%",
              marginTop: "2%",
              marginBottom: "2%",
              '&:hover': {
                color: "black",
                background: "gray"
              },
            }}
          >{t("certificatePage.comment")}</Button>
        </div>) : null}
      <MyDialog
        handleRadio={handleRadioChangeSetSupplier}
        open={openDialog} onClose={handleCloseDialog}></MyDialog>
      <MyDialogAddParticipant
        open={openDialogPerson} onClose={handleCloseDialogPersons}
        handleCheckedParticipants={handleCheckedParticipants}
      ></MyDialogAddParticipant>
    </>
  );
};

export default EditCertificate;