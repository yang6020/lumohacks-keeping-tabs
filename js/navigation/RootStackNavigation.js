import { createStackNavigator } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
export default createStackNavigator(
  {
    NavLayout: NavigationLayout,
  },
  {
    headerMode: "none",
  }
);
