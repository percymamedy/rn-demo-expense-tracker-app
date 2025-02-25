import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import RecentExpensesScreen from '../screens/RecentExpensesScreen';
import AllExpensesScreen from '../screens/AllExpensesScreen';
import EditExpenseScreen from '../screens/EditExpenseScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import IconButton from './ui/IconButton';

import useGlobalStyles from '../constants/styles';
import { loadExpenses } from '../store/expenses/expenseSlice';
import { EXPENSES } from '../data/dummy-data';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const { colors } = useGlobalStyles();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        animation: 'shift',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.primary500,
        },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            color={tintColor}
            size={30}
            buttonStyles={styles.headerButtonContainer}
            onPress={() => {
              navigation.navigate('AddExpense');
            }}
          />
        ),
        tabBarStyle: {
          backgroundColor: colors.primary500,
        },
        tabBarActiveTintColor: colors.accent500,
        tabBarInactiveTintColor: colors.primary950,
        sceneStyle: {
          backgroundColor: colors.primary100,
        },
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootStack() {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Remove this if you copy and paste the code!
        await new Promise(resolve => {
          dispatch(loadExpenses(EXPENSES));
          return resolve();
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.flex1} onLayout={onLayoutRootView}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.primary500,
            },
            contentStyle: {
              backgroundColor: colors.primary100,
            },
          }}
        >
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpenseScreen}
            options={{
              title: 'Add Expense',
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="EditExpense"
            component={EditExpenseScreen}
            options={{
              title: 'Edit Expense',
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonContainer: {
    marginRight: 10,
  },
});
