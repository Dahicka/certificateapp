import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CertificateOverviewPage from "./pages/CertificateOverviewPage";
import NewCertificatePage from "./pages/NewCertificatePage";
import SearchForSuppliersForm from "./components/tables/SearchForSuppliersForm";
import UserLookup from "./components/tables/UserLookup";
import EditCertificatePage from "./pages/EditCertificatePage";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/certificate", element: <CertificateOverviewPage />},
  {path: "/certificate/newcertificate", element: <NewCertificatePage />},
  {path: "/emina", element: <SearchForSuppliersForm />},
  {path: "/dahic", element: <UserLookup />},
  {path: "/certificate/editCertficate/:certificateId", element: <EditCertificatePage />},
]);

function App() {
  return <RouterProvider router={router} />;
 }

export default App;
