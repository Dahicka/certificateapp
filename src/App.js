import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewCertificatePage from "./pages/NewCertificatePage";
import EditCertificatePage from "./pages/EditCertificatePage";
import CertificateOverviewPage from "./pages/CertificateOverviewPage";
import UserContext from "./store/user-context";
import { useState } from "react";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/certificate", element: <CertificateOverviewPage /> },
  { path: "/certificate/newcertificate", element: <NewCertificatePage /> },
  { path: "/certificate/editCertficate/:certificateId", element: <EditCertificatePage /> },
]);

function App() {
  const [selectedUser, setSelectedUser] = useState("user1");
  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>);
}

export default App;
