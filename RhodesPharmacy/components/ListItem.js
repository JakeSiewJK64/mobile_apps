import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ListItem = ({ item, deleteItem }) => {
  console.log(item);
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listIteText}>{item.id} {item.text}</Text>
        <Text style={styles.removeIcon} onPress={() => deleteItem(item.id)}>X</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  removeIcon: {
    color: 'firebrick',
    fontSize: 18,
    fontWeight: 'bold'
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18
  }
})

export default ListItem;