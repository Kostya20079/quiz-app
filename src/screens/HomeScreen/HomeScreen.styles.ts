import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 20,
  },
  test: {
    gap: 6,
    borderRadius: 12,
    backgroundColor: "#e5e6e8",
    padding: 16,
  },
  pressed: {
    opacity: 0.7,
  },
  testName: {
    color: "#1e3a75",
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    color: "#232323",
    fontSize: 14,
  },
  count: {
    color: "#64748b",
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#1e3a75",
    padding: 14,
  },
  footerText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
