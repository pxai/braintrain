import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
    return (
      <View style={styles.container}>
        <Text>Brain Train</Text>
        <Text>By Pello Altadill</Text>
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