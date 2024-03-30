import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  const {text, isCompleted, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View>
          <View style={styles.checkBox}>
            {isCompleted && <Text style={styles.checkmark}>&#10003;</Text>}
          </View>
        </View>
        <Text style={[styles.itemText, isCompleted ? styles.completedText : null]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkmark: {
    color: '#000',
    //fonstSize: 15,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888'
  },
  item: {
    justifyContent: "top",
    padding: 16,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 8,
    flexDirection: "row",
    shadowOffset: { Width: 0, height: 0 },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 14,
  },
  itemText: {
    fontSize: 17,
    //maxWidth: 350,
    maxWidth: "80%",
  },
  checkBox: {
    width: 24,
    height: 24,
    flexShrink: 0,
    borderRadius: 4,
    backgroundColor: "rgba(141, 223, 218, 0.40)",
    marginRight: 16,
    alignItems: "center",
  },
});

export default Task;
