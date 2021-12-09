import React from 'react';
import { SafeAreaView } from 'react-native';
import LedAdd from './screens/LedAdd';
import LedControll from './screens/LedControll';

export default function App() {
  return (
    <SafeAreaView> 
      <LedControll/>
    </SafeAreaView>
  );
}
