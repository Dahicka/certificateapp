import { Button } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { useForm } from 'react-hook-form';
import styles from "../../style.module.css";
import CertificateOverviewTable from "./CertificateOverviewTable";

const SearchForSuppliersForm = () => {
    const[searchCriteria, setSearchCriteria] = useState(false);
    const handleSearchCriteria = () => {
        setSearchCriteria(!searchCriteria);
    }; 
    const[searchSupplier, setSearchSupplier] = useState(false);
    const handleSearchSupplier = () => {
        setSearchSupplier(!searchSupplier);
    }; 
    const { register, formState: { errors }, handleSubmit } = useForm();
 return(
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
    ><img src = {require("../../resources/icons/menu/triangle_arrow_down.png")} width="7px"/>
        &nbsp;Search criteria
    </Button>
    {searchCriteria ? (<Stack alignItems={"flex-start"}>  
        
        <form className={styles.formsupplier}>
        <div className={styles.inputrow}>
        <label className={styles.labelinputcertificate}>Supplier name</label>
        <input {...register("suppliername", { required: true })} className = {styles.inputsupplier} />
        </div>
        <div className={styles.inputrow}>
        <label className={styles.labelinputcertificate}>Supplier index</label>
        <input {...register("supplierindex", { required: true })} className = {styles.inputsupplier}/>
        </div>
        <div className={styles.inputrow}>
        <label className={styles.labelinputcertificate}>City</label>
        <input {...register("suppliercity", { required: true })} className = {styles.inputsupplier}/>
        </div>
        </form>
        <div className={styles.divforsuppliersbuttons}> 
<Button style={{ 
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
            Search</Button>
<Button style={{ 
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
            Reset</Button>
            </div>

</Stack> ) : null}
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
    ><img src = {require("../../resources/icons/menu/triangle_arrow_down.png")} width="7px"/>
        &nbsp;Supplier list
    </Button>
    {searchSupplier ? (<Stack alignItems={"flex-start"}>  
        <CertificateOverviewTable></CertificateOverviewTable>

        <div className={styles.divforsuppliersbuttons}> 
<Button style={{ 
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
            Search</Button>
<Button style={{ 
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
            Cancel</Button></div>
</Stack> ) : null}

</div>
</>
 );
}

export default SearchForSuppliersForm;