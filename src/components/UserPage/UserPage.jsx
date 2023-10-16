import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import CardWithForm  from '../CardWithForm/CardWithForm';
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
   
      
      <main className="w-full h-full bg-background flex min-h-screen flex-col items-center">
        <div className="w-full flex justify-end p-4">
          {/* <ModeToggle /> */}
        </div>

        
        <div className="flex min-h-screen items-center">
          <CardWithForm />
        </div>
      </main>
      // {/* <div className="panel">
      //   <h2 className="titleBase_inner">Welcome, {user.username}!</h2>
      //   <p>Your ID is: {user.id}</p>
      //   <LogOutButton className="btn" />
      // </div> */}
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
