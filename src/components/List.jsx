import React from 'react';
import { FlatList, Text } from 'react-native';
import useLDflexList from '../hooks/useLDflexList';

/** Displays a list of items matching a Solid LDflex expression. */
export default function List({
  src, offset = 0, limit = Infinity, filter = () => true,
  keyExtractor = item => item,
  children = item => `${item}`,
  renderItem = ({ item }) => <Text>{item}</Text>,
}) {
  const items = useLDflexList(src)
    .filter(filter)
    .slice(offset, +offset + +limit)
    .map(children);
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}
