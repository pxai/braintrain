import { StyleSheet, Text, View } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Home up App.js to start working on your app!</Text>
        <Stack fill center spacing={4}>
            <Button
                title="Training"
                onPress={() => navigation.navigate('Training')}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
            />
        </Stack>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });