import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_2: "" }

  render = () => (
    <View>
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_2}
        onChangeText={nextValue => this.setState({ TextInput_2: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({ View_1: {}, TextInput_2: {} })
