import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackParamList = {
  Home: undefined;
  Quiz: { testId: string };
};

export type RootDrawerParamList = {
  Main: NavigatorScreenParams<HomeStackParamList>;
  Results: undefined;
};

export type HomeNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamList, "Home">,
  DrawerNavigationProp<RootDrawerParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
