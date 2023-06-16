import {Alert, Button, TextInput, View} from 'react-native';
import {KeyboardProvider} from 'react-native-keyboard-controller';

export default function App() {
  return (
    <KeyboardProvider>
      <TestView />
    </KeyboardProvider>
  );
}

function TestView() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput placeholder="PLACHOLDER TEXT" />
      <Button
        onPress={() => {
          Alert.alert('Hello');
        }}
        title="Show Alert"
      />
    </View>
  );
}
