import { StatusBar } from 'expo-status-bar';

import RootStack from './components/RootStack';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <RootStack />
      <StatusBar style="auto" />
    </Provider>
  );
}
