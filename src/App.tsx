import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './navigation/Router';
import {configuredStore} from './store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
      <Provider store={configuredStore.store}>
        <PersistGate persistor={configuredStore.persistor}>
          <Router />
        </PersistGate>
      </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
