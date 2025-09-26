import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
    const [name, setName] = useState('');//state para 
    const [idade, setAge] = useState('');//state para idade
    const [sport, setSport] = useState('');//state para 


    return (
    <View style={styles.body}>
         <TextInput
            placeholder="digite seu nome"
            onChangeText={setName}
         />
           <TextInput
            placeholder="digite sua idade"
            onChangeText={setAge}
         />
         <Text style={styles.title}>
        meu nome é {name}
         </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "red",
        padding: 10
    },
    title: {
        fontSize: 19
    }
});