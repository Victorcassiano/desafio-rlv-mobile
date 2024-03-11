import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { ContextsProvider } from "../context/contexts";
import 'moment/locale/pt-br';
import Header from "../components/Header";
import { useModal } from "../context/modalContexts";

export default function Layout() {
    useEffect(() => {
        StatusBar.setBackgroundColor('#E5E7EB')
        StatusBar.setBarStyle('dark-content', true)
        StatusBar.setTranslucent(true)
    }, [])



    return (
        <ContextsProvider>
            <Header />
            <Stack
                initialRouteName="/index/"
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                    contentStyle: { backgroundColor: '#f5f5f5' }
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </ContextsProvider>
    );
}