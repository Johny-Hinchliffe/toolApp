import React, {useState} from 'react';

const Context = React.createContext('english');

export const MainStore = ({children}) => {
  const [contextState, setContextState] = useState(0)
  
    return (
      <Context.Provider
        value={{ contextState, onStateChange: setContextState }}
      >
        {children}
      </Context.Provider>
    );
  }


export default Context;