import { useLiveQuery } from "dexie-react-hooks";
import { useParams } from "react-router-dom";
import EditCertificate from "../components/tables/EditCertificate";
import db from "../DataBaseSettings";
import { useLocation } from "react-router-dom";

const EditCertificatePage = () => {
    const location = useLocation();

    const editCertificateFromDb = async (certificate) => {
        console.log("id za edit je"+parseInt(certificate.id))
        console.log(certificate)
        await db.certificates.update(parseInt(certificate.id), {
          supplier: certificate.supplier,
          certificateType: certificate.certificateType,
          validFrom: certificate.validFrom,
          validTo: certificate.validTo,
        }) 
    }

  return (
    <EditCertificate
     certificate={location.state}
     updateCertificate={editCertificateFromDb}
    ></EditCertificate>
  );
};
export default EditCertificatePage;