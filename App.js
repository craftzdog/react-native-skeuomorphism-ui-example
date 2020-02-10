/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import NeumorphismButton from './src/neumorphism-button';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <NeumorphismButton size={8} style={styles.button1}>
              <Text>Hello</Text>
            </NeumorphismButton>
            <NeumorphismButton size={8} style={styles.button2}>
              <Text>Hello</Text>
            </NeumorphismButton>
            <NeumorphismButton size={8}>
              <Text>Hello2</Text>
            </NeumorphismButton>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#55b9f3',
    flex: 1,
  },
  body: {
    backgroundColor: '#55b9f3',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  button1: {
    padding: 60,
  },
  button2: {
    padding: 30,
  },
});

export default App;
