import { createStackNavigator } from '@react-navigation/stack';
import { Principal } from '../../Principal';
import AccountScreen from '../../Account/account';
import WelcomeScreen from '../../Welcome/welcome';
import GroupsScreen from '../../Groups/groups';
import CodeScreen from '../../Code/code'
import PasswordScreen from '../../Password/password';
import NewGroupScreen from '../../New Group/newGroup';
import PositionScreen from '../../Position/position';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Principal} options={{headerShown: false}} />
      <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}} />
      <Stack.Screen name="Groups" component={GroupsScreen} options={{headerShown: false}} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Code" component={CodeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Password" component={PasswordScreen} options={{headerShown: false}} />
      <Stack.Screen name="NewGroup" component={NewGroupScreen} options={{headerShown: false}} />
      <Stack.Screen name="Position" component={PositionScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}