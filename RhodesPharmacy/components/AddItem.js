import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

const AddItem = ({ addItem }) => {

  const [text, setText] = useState("")
  const onChange = textValue => {
    setText(textValue);
  }

  return (
    <View>
      <TextInput
        placeholder="add item..."
        style={styles.input}
        onChangeText={onChange} />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          ADD ITEM
        </Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddItem;