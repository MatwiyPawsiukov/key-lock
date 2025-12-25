import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native"
import * as Clipboard from "expo-clipboard"
import React from "react"
import { colors } from "../styles/colors"

export default function NumberBox({ password }) {
    const copyPassword = async () => {
        if (!password) {
            Alert.alert("⚠️ Немає пароля", "Згенеруйне пароль перед копіюванням")
            return;
        }
        await Clipboard.setStringAsync(password)
        Alert.alert("✅ Скопійовано", "Пароль у буфері")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Пароль:</Text>

            <View style={styles.box}>
                <Text style={styles.text}>{password || "-"}</Text>
            </View>

            <TouchableOpacity style={styles.copyBtn} onPress={copyPassword}>
                <Text style={styles.copyText}>Копіювати</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginTop: 15 },
    label: { color: colors.text, marginBottom: 5 },
    box: {
        backgroundColor: colors.bgLight,
        padding: 12,
        borderRadius: 8
    },
    text: { fontSize: 16, color: colors.text },
    
    copyBtn: {
        marginTop: 10,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        alignItems: "center"
    },
    copyText: {
        color: colors.primary,
        fontWeight: "bold",
    },
})
