import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen"
import { StatusBar } from "expo-status-bar"

export default function App() {
    return <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        
        <HomeScreen />
    </SafeAreaView>
}