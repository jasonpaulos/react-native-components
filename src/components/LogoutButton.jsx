import React from 'react';
import { Button } from 'react-native';
import auth from 'solid-auth-client';

/** Button that lets the user log out with Solid. */
export default function LogoutButton({
  children = 'Log out',
  // className = 'solid auth logout',
}) {
  return (
    <Button
      title={children}
      // className={className}
      onClick={() => auth.logout()}
    />
  );
}
