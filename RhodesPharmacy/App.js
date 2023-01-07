import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useState } from 'react';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Pennicilin' },
    { id: 2, text: 'Antibiotics' },
    { id: 3, text: 'Splint' },
    { id: 4, text: 'Testosterone Extract' },
    { id: 5, text: 'Casting' },
    { id: 6, text: 'Lip Balm' },
    { id: 7, text: 'Aspirin' },
  ])

  const addItem = (text) => {
    setItems(prevItem => {
      return [{ id: items.length + 1, text: text }, ...prevItem];
    })
  }

  const deleteItem = (id) => {
    console.log(`deleted item id: ${id}`);
    setItems(prevItem => {
      return prevItem.filter(item => {
        return item.id != id
      });
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => {
        return <ListItem item={item} deleteItem={deleteItem} />
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;