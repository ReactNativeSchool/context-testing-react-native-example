import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native";

import { Input, Button } from "../components/Form";
import { useName } from "../util/NameManager";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  headerText: {
    color: "#353031",
    fontWeight: "bold",
    fontSize: 34,
    marginBottom: 10,
  },
});

export default () => {
  const { name, saveName } = useName();
  const [newName, setNewName] = React.useState(null);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <Text style={styles.headerText}>Welcome, {name || "No Name"}!</Text>

      <Input
        label="Name"
        placeholder="Example"
        value={newName}
        onChangeText={(text) => setNewName(text)}
      />

      <Button
        text="Change"
        onPress={() => {
          saveName(newName);
          setNewName(null);
        }}
      />
    </KeyboardAvoidingView>
  );
};
