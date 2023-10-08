import React from "react";

const UserContext = React.createContext({
    selectedUser: "",
    setSelectedUser: (currentUser) => { }
})

export default UserContext;