import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { SignIn } from './src/screens/SignIn';

import dark from './src/styles/themes/dark'

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <SignIn/>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
