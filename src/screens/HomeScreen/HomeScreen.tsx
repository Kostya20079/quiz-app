import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

import { HomeNavigation } from "../../components/navigation/types";
import { TESTS } from "../../data/tests";
import styles from "./HomeScreen.styles";

function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>();

  return (
    <View style={styles.container}>
      {TESTS.map((test) => (
        <Pressable
          key={test.id}
          style={({ pressed }) => [styles.test, pressed && styles.pressed]}
          onPress={() => navigation.navigate("Quiz", { testId: test.id })}
        >
          <Text style={styles.testName}>{test.name}</Text>
          <Text style={styles.description}>{test.description}</Text>
          <Text style={styles.count}>
            {test.numberOfTasks}{" "}
            {test.numberOfTasks === 1 ? "question" : "questions"}
          </Text>
        </Pressable>
      ))}

      <Pressable
        style={({ pressed }) => [styles.footer, pressed && styles.pressed]}
        onPress={() => navigation.navigate("Results")}
      >
        <Text style={styles.footerText}>Wyniki</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
