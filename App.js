import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <MainNavigator/>
          <StatusBar style="light" />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#02194d'
  },
  safeView:{
    marginTop:20
  }
});
