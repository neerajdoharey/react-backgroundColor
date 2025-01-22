/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [ranbackgroundColor, setranbackgroundColor] = useState('#ffffff')
  const [rancirleColor, setrancirleColor] = useState('#FF9800')
  const [ranSquareColor, setranSquareColor] = useState('#FF9800')

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let colors = [];
    for (let j = 0; j < 3; j++) {
      let color = "#"
      for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16 )]
      }
      colors.push(color)
    }
    setranbackgroundColor(colors[0])
    setrancirleColor(colors[1])
    setranSquareColor(colors[2])
  }

  return (
    <>
      <StatusBar backgroundColor={ranbackgroundColor}/>
      <View style={[styles.container, {backgroundColor: ranbackgroundColor}]}>
        <View style={[styles.circleShape, {backgroundColor: rancirleColor}]} />
        {/* <View style={[styles.pentagon, {backgroundColor: ranPantagonColor}]} />
        <View style={[styles.triangleShape, {backgroundColor: ranTriangleColor}]} /> */}
        <View style={[styles.squareShape, {backgroundColor: ranSquareColor}]} />
        <TouchableOpacity
          onPress={generateColor}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  btnText:{ color: '#ffffff', fontSize: 24},
  circleShape: {
    width: 100,
    height: 100,
    borderRadius: 50,  // Half of width/height
    position: 'absolute',
    left: 50,
    top: 200,
  },
  squareShape: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 50,
    top: 200,
  }
});

export default App;
