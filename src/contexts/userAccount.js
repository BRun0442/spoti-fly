import { createContext, useState } from "react";

export const userContext = createContext({});

function UserProvider({children})
{
  const [login, setLogin] = useState(false);
  const [id, setId] = useState();
  const [email, setEmail] = useState();

  return(
    <userContext.Provider value={{
      login, setLogin: value => setLogin(value), 
      id, setId: value => setId(value), 
      email, setEmail: value => setEmail(value)}}
    >
      {children}
    </userContext.Provider>
  )
}

export default UserProvider;