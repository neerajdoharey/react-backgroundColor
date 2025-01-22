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
  const [newColor, setNewColor] = useState('#ffffff')

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16 )]
    }
    setNewColor(color)
  }

  return (
    <>
      <StatusBar backgroundColor={newColor}/>
      <View style={[styles.container, {backgroundColor: newColor}]}>
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
  btnText:{ color: '#ffffff', fontSize: 24}
});

export default App;
