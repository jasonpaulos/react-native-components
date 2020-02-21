import React from 'react';
import { Button } from 'react-native';
import auth from 'solid-auth-client';

/** Button that lets the user log in with Solid. */
export default function LoginButton({
  popup,
  children = 'Log in',
  // className = 'solid auth login',
}) {
  return (
    <Button
      title={children}
      // className={className}
      onPress={() => auth.popupLogin({ popupUri: popup })}
    />
  );
}
