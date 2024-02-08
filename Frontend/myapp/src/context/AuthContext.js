import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user:{"_id":"65b98a3769a130cc5257e09b","username":"andrej","email":"andrej@gmail.com","password":"$2b$10$DzWZ0.4wdYH3Dhj3Un/zpuzk7gzppMaONX2EPtH0e64fUwUKzDLKe","profilePicture":"","coverPicture":"","followers":[],"followings":["65b94a69a0ced17475b48cba"],"isAdmin":false,"createdAt":"2024-01-30T23:45:59.655Z","updatedAt":"2024-02-01T23:07:14.320Z","__v":0,"opis":"default-value","description":"hej, ovo je updateovan opiss andreja","city":"Beograd","country":"Srbija","relationship":3},
    // user:null,
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE)


export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return(
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}