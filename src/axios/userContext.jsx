import React, { createContext, useState, useContext } from 'react';

// Criação do contexto para o usuário
const UserContext = createContext();

// Hook para acessar o contexto
export const useUser = () => {
  return useContext(UserContext);
};

// Componente Provider que envolve sua aplicação e fornece o estado global
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // estado global para o usuário

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};




// import React, { createContext, useState, useContext } from 'react';

// // Criação do contexto para o usuário
// const UserContext = createContext();

// // Hook para acessar o contexto
// export const useUser = () => {
//   return useContext(UserContext);
// };

// // Componente Provider que envolve sua aplicação e fornece o estado global
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // estado global para o usuário

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };







// import React, { createContext, useState, useContext } from 'react';

// // Criação do contexto para o usuário
// const UserContext = createContext();

// // Hook para acessar o contexto
// export const useUser = () => {
//   return useContext(UserContext);
// };

// // Componente Provider que envolve sua aplicação e fornece o estado global
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // estado global para o usuário

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };