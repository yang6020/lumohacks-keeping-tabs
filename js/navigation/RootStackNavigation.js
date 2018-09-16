import { createSwitchNavigator } from 'react-navigation';
import NavigationLayout, { authStack } from './NavigationLayout';
import DrinkModal from '../components/DrinkModal'
const createRootNavigator = signedIn =>
  createSwitchNavigator(
    {
      SignedOut: {
        screen: authStack,
      },
      SignedIn: {
        screen: NavigationLayout,
      },
      MyModal: {
        screen: DrinkModal
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    },
    {
      mode: "modal"
    }
  );

export default createRootNavigator;
