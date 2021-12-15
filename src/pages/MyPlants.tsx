import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Image,
  View,
  Text,  
  FlatList
} from "react-native";

import { Header } from "../components/Header";

import { loadPlants, PlantProps } from "../libs/storage";
import { formatDistance } from "date-fns";

import colors from "../styles/colors";
import waterDrop from "../assets/waterdrop.png";
import { pt } from "date-fns/locale";
import fonts from "../styles/fonts";
import { PlantCardSecondary } from "../components/PlantCardSecondary";

export function MyPlants() {

  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<String>();

  useEffect(() => {
    async function loadStorageData(){
      const plantsStoraged = await loadPlants();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {locale: pt}
      );

      setNextWaterd(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas`
      );
      console.log('Hora bugada:', nextTime);

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  })


  return(
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image
         source={waterDrop}
         style={styles.spotlightImage}
        />

        <Text style={styles.spotlightText}>
          {nextWaterd}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id) }
          renderItem={({ item }) => (
            <PlantCardSecondary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flex: 1}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotlight: {
    marginTop: 20,
    backgroundColor: colors.blue_light,
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center'
  },
  spotlightImage: {
    height: 60,
    width: 60
  },

  spotlightText: {
    color: colors.blue,
    flex: 1,
    paddingHorizontal: 20, 
  },
  
  plants: {
    flex: 1,
    width: '100%'
  },

  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  }

});
