import { StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "10%",
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0095b6",
  },
  text: {
    fontSize: 40,
    color: "white",
  },
});
