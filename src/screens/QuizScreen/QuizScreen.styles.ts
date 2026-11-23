import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 20,
  },
  title: {
    color: "#111827",
    fontSize: 26,
    fontWeight: "700",
  },
  description: {
    color: "#64748b",
    fontSize: 16,
    lineHeight: 23,
  },
  count: {
    color: "#2563eb",
    fontSize: 15,
    fontWeight: "600",
  },
  button: {
    marginTop: 8,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#2563eb",
    padding: 14,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default styles;
