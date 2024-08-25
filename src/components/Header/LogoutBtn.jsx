import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authslice';
// Assuming you have a new authentication service, update the import:
import authService from '../../services/authService';  // Adjust the path as needed

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout();  // Call the new logout method
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed: ", error);
      // Optionally, add some error handling logic here, e.g., showing an alert or message to the user
    }
  };

  return (
    <button
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
