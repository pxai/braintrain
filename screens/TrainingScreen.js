import { StyleSheet, Text, View } from 'react-native';
import { Stack, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculationScreen from './training/CalculationScreen';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Training() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Addition" component={CalculationScreen} 
          initialParams={{ operation: '+' }}
          options={{
            tabBarIcon: (props) => (
              <Icon name="plus" {...props} />
            ),
          }}
          />
        <Tab.Screen 
          name="Substraction" component={CalculationScreen}
          initialParams={{ operation: '-' }}
          options={{
            tabBarIcon: (props) => (
              <Icon name="minus" {...props} />
            ),
          }}
        />
        <Tab.Screen 
          name="Multiplication" component={CalculationScreen} 
          initialParams={{ operation: '*' }}
          options={{
            tabBarIcon: (props) => (
              <Icon name="multiplication" {...props} />
            ),
          }}
        />
        <Tab.Screen 
          name="Division" component={CalculationScreen} 
          initialParams={{ operation: '/' }}
          options={{
            tabBarIcon: (props) => (
              <Icon name="division" {...props} />
            ),
          }}
        />
      </Tab.Navigator>
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