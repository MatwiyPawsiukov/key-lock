import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../src/styles/colors';

export default function Layout() {
    return (
        <>
            <StatusBar style="light" backgroundColor={colors.bg} />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.bg }
                }}
            />
        </>
    );
}
