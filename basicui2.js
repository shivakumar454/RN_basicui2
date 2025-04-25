import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Checkbox, RadioButton, Divider, ProgressBar, Searchbar, Card, Switch, TouchableRipple } from "react-native-paper";
import Toast from "react-native-toast-message";
import Modal from "react-native-modal";

export default function BasicUI2() {
  const [see, setSee] = useState(false);

  const showMessage = () => {
    Toast.show({
      type: "info",
      position: "top",
      text1: "Login failed",
      text2: "ok ok",
      visibilityTime: 2000,
      bottomOffset: 300,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello bro, Welcome to React Native!</Text>

      <Button
        mode="outlined"
        icon="home"
        textColor="white"
        rippleColor="white"
        style={styles.button}
      >
        Click me
      </Button>

      <Divider />

      <Checkbox status="unchecked" />

      <Divider />

      <RadioButton status="checked" />

      <Divider bold style={styles.divider} />

      <ProgressBar progress={0.4} color="blue" style={styles.progressBar} />

      <Searchbar
        placeholder="Search engine"
        iconColor="orange"
        mode="bar"
        elevation={3}
        style={styles.searchBar}
      />

      <Card>
        <Card.Title title="Lion" subtitle="Mufasa" />
        <Card.Cover source={{ uri: "https://www.artsindia.com/cdn/shop/articles/Lion_Art.jpg?v=1680327542" }} />
        <Card.Content>
          <Text>Lion</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Ok</Button>
          <Button>Roar</Button>
        </Card.Actions>
      </Card>

      <Switch value={true} />

      <TouchableRipple
        rippleColor="red"
        onPress={() => console.log("Pressed")}
      >
        <Text>Hello</Text>
      </TouchableRipple>

      <Modal
        isVisible={see}
        animationIn="bounceIn"
        animationInTiming={1600}
        animationOut="bounceOut"
        animationOutTiming={1600}
      >
        <Text style={styles.modalText}>Shiva</Text>
      </Modal>

      <Button mode="contained" icon="home" onPress={() => setSee(!see)}>
        Toggle Modal
      </Button>

      <Toast />
      <Button mode="contained" onPress={showMessage}>
        Show Message
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
    marginBottom: 20,
  },
  divider: {
    marginBottom: 10,
  },
  progressBar: {
    marginBottom: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
  modalText: {
    color: 'white',
    fontSize: 16,
  },
});
