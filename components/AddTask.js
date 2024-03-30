import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import {useState} from 'react';
//import ItemList from './components';

const AddTask = (props) => {
    const [task, setTask] = useState('');
    const { onAddTaskPress } = props;

    const handleAddTask = () => {
      if (task == "" || task == null) {
        console.log("Empty")
      } else {
        onAddTaskPress(task);
        console.log("Handle new task pressed: ", task)
        setTask();
        Keyboard.dismiss()
      }
    }
    
  return (
    <View style= {styles.container}>
        <TextInput
        value = {task}
        style={styles.textInput}
        onChangeText={setTask}
        placeholder="Add a new task"
      />
      <TouchableOpacity style = {styles.button} onPress={handleAddTask}>
        <Text style = {styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F1F1',
    padding:16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    fontSize: 17,
    borderRadius: 10,

  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 17,
    color: '#558CF6',
    fontWeight: 'bold',
  }
});

export default AddTask;