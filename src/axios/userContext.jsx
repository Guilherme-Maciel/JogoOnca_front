import React, { createContext, useState, useContext } from 'react';

// Criação do contexto para o usuário
const UserContext = createContext();

// Hook para acessar o contexto
export const useUser = () => {
  return useContext(UserContext);
};


// Componente Provider que envolve sua aplicação e fornece o estado global
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user");

  return savedUser ? JSON.parse(savedUser) : null;
});// estado global para o usuário

  const clearUser = () => {
    setUser(null); 
    // Pro-tip: Also clear any browser storage persistence here
    localStorage.clear(); 
  };
  
  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
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