import React from 'react';
import { AuthContext } from '../../src/providers/auth';

export function ContextApp() {
  const {user} = React.useContext(AuthContext);
  
  console.log(user);

  return (
    <div>
      <label htmlFor="">{user.name}</label>
    </div>
  );
}
