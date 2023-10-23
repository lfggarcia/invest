import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

import Router from '@navigation/index';
import {persistor, store} from '@core/store';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
        <Toast />
      </>
    );
  }
}

export default App;
