import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TESTS } from "../../data/tests";
import { Text } from "react-native";

function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <Text style={{ color: "gray" }}>Testy</Text>

      {TESTS.map((test) => (
        <DrawerItem
          key={test.id}
          label={test.name}
          onPress={() => {
            props.navigation.navigate("Main", {
              screen: "Quiz",
              params: { testId: test.id },
            });
          }}
        />
      ))}
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
