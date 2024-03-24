import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import {useState} from 'react';

const ItemList = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    return (
        <View>
            {items.map((item, index) => (
                return <Text key = {index}>
                    {item}
                </Text>
            ))}
        </View>
    );
};

export default ItemList;