import { createContext, useReducer } from "react";

const UserContext = createContext({
    user :{
        name : "dummy name",
        email:"dummy@gmail.com"
    }
})

UserContext.displayName ="User context";

export default UserContext;