import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Pressable
        onPress={() => {
          console.log('Button Pressed');
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : '#5200ff',
            padding: 10,
            borderRadius: 5,
          },
        ]}
      >
        <Text style={{ color: '#fff' }}>Press Me</Text> 
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
