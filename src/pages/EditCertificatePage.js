import EditCertificate from "../components/tables/newCertificate/EditCertificate";
import db from "../DataBaseSettings";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "../components/header/Header";
import NavigationBar from "../components/navigation_bar/NavigationBar";

const EditCertificatePage = () => {
  const location = useLocation();
  const editCertificateFromDb = async (certificate) => {
    await db.certificates.update(parseInt(certificate.id), {
      supplier: certificate.supplier,
      certificateType: certificate.certificateType,
      validFrom: certificate.validFrom,
      validTo: certificate.validTo,
      participants: certificate.participants,
      comments: certificate.comments
    })
  }

  return (
    <>
      <Header></Header>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Grid item>
          <NavigationBar></NavigationBar>
        </Grid>
        <Grid item>
          <EditCertificate
            certificate={location.state}
            updateCertificate={editCertificateFromDb}
          ></EditCertificate>
        </Grid>
      </Grid>
    </>
  );
};

export default EditCertificatePage;