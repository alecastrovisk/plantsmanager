import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from "../assets/lincu.jpg";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Lincon</Text>   
      </View>

      <Image 
        source={userImg}
        style={styles.image}
      />
               
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }
});