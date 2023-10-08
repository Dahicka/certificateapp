import React from "react";

// User context is used for saving currently active user.
const UserContext = React.createContext({
    selectedUser: "",
    setSelectedUser: (currentUser) => { }
})

export default UserContext;