import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

import wateringImg from "../assets/watering.png"; 
import colors from "../styles/colors";
import { Button } from "../components/Button";

export function Welcome() {
    const [visible, setVisible] = useState(true);

    function handleVisibility() {
      if(visible){
        setVisible(false)
      }else{
        setVisible(true)
      }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
              Gerencie {'\n'}
              suas plantas {'\n'}
               de forma fácil
            </Text>

            {
              visible &&
              <Image source={wateringImg} />
            }

            <Text style={styles.subtitle}>
              Não esqueça mais de regar suas plantas.
              Nós cuidamos de lembrar você
              sempre que precisar.
            </Text>

            <Button title="Imagem" onPress={handleVisibility}/>

        </View>
    )
}

const styles = StyleSheet.create({  
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56

  },
  
  image: {
    width: 292,
    height: 284
  }

});