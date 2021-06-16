import React, { useEffect, useState } from 'react';
export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  
  const cadastro = {
   
    newTaskEndereco: '',
    newTaskTelefone: '',
    newTaskCpf: '',
    newTaskEmail: '',
    newTaskTitle: 'Leo',
  };

  return (
    <AuthContext.Provider
      value={{
        cadastro,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
