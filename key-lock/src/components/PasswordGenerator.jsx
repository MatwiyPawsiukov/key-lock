import { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput } from "react-native";
import { generateNumber } from "../utils/generateNumber";
import NumberBox from "./NumberBox";
import { colors } from "../styles/colors";

export default function PasswordGenerator(){
    const [length, setLength] = useState("12")
    const [upper, setUpper] = useState(true)
    const [numbers, setNumbers] = useState(true)
    const [symblos, setSymblos] = useState(true)
    const [password, setPassword] = useState("")

    const handleGenerate = () => {
        const len = parseInt(length) || 12;
        const result = generateNumber(len, upper, numbers, symblos)
        setPassword(result)
    }

    return (
        <View style={styles.card}>
            <View style={styles.card}>

            <Text style={styles.label}>Довжина:</Text>
            <TextInput value={length} onChangeText={setLength} keyboardType="numeric" style={styles.input}/>

            </View>

            <View style={styles.rowBetween}>
                <Text style={styles.text}>Великі Літери</Text>
                <Switch value={upper} onValueChange={setUpper}/>
            </View>

            <View style={styles.rowBetween}>
                <Text style={styles.text}>Цифри</Text>
                <Switch value={numbers} onValueChange={setNumbers}/>
            </View>

            <View style={styles.rowBetween}>
                <Text style={styles.text}>Символи</Text>
                <Switch value={symblos} onValueChange={setSymblos}/>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleGenerate}>
                <Text style={styles.buttonText}>🎲 Згенерувати</Text>
            </TouchableOpacity>

            <NumberBox password={password}/>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        padding: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    label:{
        fontSize: 16,
        marginRight: 10,
        color: "#ffffff",
        fontWeight: "bold",
    },
    text: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 6,
        borderRadius: 6,
        color: colors.text,
        flex: 1,
        textAlign: "center",
    },
    button: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText:{
        color: "#fff",
        fontWeight: "bold"
    
    }
})