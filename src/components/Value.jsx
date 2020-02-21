import React from 'react';
import { Text } from 'react-native';
import useLDflex from '../hooks/useLDflex';

/** Displays the value of a Solid LDflex expression. */
export default function Value({ src, children, onPress }) {
  const [value, pending, error] = useLDflex(src);
  // Render stringified value
  if (value !== undefined && value !== null)
    return <Text onPress={onPress}>{`${value}`}</Text>;
  // Render pending state
  else if (pending)
    return children || <Text>solid value pending</Text>;
  // Render error state
  else if (error)
    return children || <Text>solid value error: {error.message}</Text>;
  // Render empty value
  else
    return children || <Text>solid value empty</Text>;
}
