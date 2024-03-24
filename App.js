import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import Task from "./components/Task";
import AddTask from './components/AddTask';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [items, setItems] = useState([]);

  const handleTaskPressed = async (index) => {
    console.log("Handle task pressed")
    let updatedTasks = [...items];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setItems(updatedTasks);

    try {
      await AsyncStorage.setItem('task-list', JSON.stringify([updatedTasks]));
    } catch (error) {
      console.error("Error saving tasks to AsyncStorage: ", error)
    }
  };

  const onAddTaskPress = async (text) => {
    const updatedTasks = [...items, {text: text, isCompleted: false}];
    setItems(updatedTasks);

    try {
      await AsyncStorage.setItem('tasks-list', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Error saving tasks to AsyncStorage: ", error);
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("task-list");
        if (storedTasks !== null) {
          setItems(JSON.parse(storedTasks))
        }
      } catch (error) {
        console.error("Error loading tasks from AsyncStorage: ", error);
      }
    };

    loadTasks;
    }, []);

    const onTaskPress = (index) => {
      const updatedTasks = [...items];
      updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
      setItems(updatedTasks);
      saveTasks(updatedTasks);
    }

  return (
    
    <View style={styles.container}>
      <View style = {styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style = {styles.Items}>
          {items.map((item, index) => {
            return <Task text = {item.text} key={index} onPress={ () => handleTaskPressed(index)} isCompleted={item.isCompleted}></Task>;
          })}
        </View>
        
      </View>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style = {styles.addTaskContainer}>
        <AddTask onAddTaskPress={onAddTaskPress}/>
      </KeyboardAvoidingView >
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  addTaskContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f1f1',
    justifyContent: 'top',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  taskWrapper: {
    marginTop: 80,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  Items: {
    marginTop: 32,
  },

  });
