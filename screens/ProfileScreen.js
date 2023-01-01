import { StyleSheet, Text, View } from 'react-native';
import { Stack, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Profile() {
  const handleSave = () => {
    console.log("Saved")
  }
    return (
      <View style={styles.container}>
        <Text>Brain Train</Text>
        <Stack spacing={2} style={{ margin: 16 }}>
          <TextInput
            label="name"
            leading={props => <Icon name="account" {...props} />}
          />
          <Button
            title="Save profile"
            onPress={() => handleSave()}
          />
        </Stack>
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