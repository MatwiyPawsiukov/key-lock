import { View, Text, StyleSheet } from "react-native"
import PasswordGenerator from "../components/PasswordGenerator"
import { colors } from "../styles/colors"

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🔒 Генератор паролів</Text>
            <PasswordGenerator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 30,
        textAlign: "center"
    },
})