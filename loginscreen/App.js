import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

import bgImage from "./images/background.jpg";
import logo from "./images/logo.png";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const { width: WIDTH } = Dimensions.get("window");

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>WELCOME !</Text>
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5
            name={"user"}
            size={28}
            color={"rgba(255, 255, 255, 0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.Input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5
            name={"lock"}
            size={28}
            color={"rgba(255, 255, 255, 0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.Input}
            placeholder={"Password"}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            <FontAwesome5
              name={this.state.press == false ? "eye" : "eye-slash"}
              size={26}
              color={"rgba(255, 255, 255, 0.7)"}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.btnlogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 120
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    opacity: 0.5
  },
  Input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 5,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 7,
    left: 32
  },
  inputContainer: {
    marginTop: 10
  },
  btnEye: {
    position: "absolute",
    top: 7,
    right: 32
  },
  btnlogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 5,
    backgroundColor: "#003D1B",
    justifyContent: "center",
    marginTop: 20
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  }
});
