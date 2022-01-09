import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import { Root } from './src/routes/roots';

export default function App() {
  let [fontsLoaded] = useFonts({
    'inter-200': require('./assets/fonts/Inter-Light.ttf'),
    'inter-400': require('./assets/fonts/Inter-Regular.ttf'),
    'inter-600': require('./assets/fonts/Inter-Medium.ttf'),
    'inter-700': require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-800': require('./assets/fonts/Inter-Bold.ttf'),
    'inter-900': require('./assets/fonts/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Root />;
  }
}
