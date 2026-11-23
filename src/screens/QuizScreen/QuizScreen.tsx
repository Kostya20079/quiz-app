import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";

import { HomeStackParamList } from "../../components/navigation/types";
import { findTest } from "../../data/tests";
import styles from "./QuizScreen.styles";

type Props = NativeStackScreenProps<HomeStackParamList, "Quiz">;

function QuizScreen({ navigation, route }: Props) {
  const test = findTest(route.params.testId);

  if (!test) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Test not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{test.name}</Text>
      <Text style={styles.description}>{test.description}</Text>
      <Text style={styles.count}>
        {test.numberOfTasks}{" "}
        {test.numberOfTasks === 1 ? "question" : "questions"}
      </Text>
      <Pressable
        accessibilityRole="button"
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to quizzes</Text>
      </Pressable>
    </View>
  );
}

export default QuizScreen;
