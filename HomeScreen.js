import React from 'react'
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'

import destinations from '../data/destinations'
import DestinationCard from '../components/DestinationCard'

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Destinations</Text>

      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <DestinationCard
            item={item}
            onPress={() =>
              navigation.navigate('Detail', {
                destination: item
              })
            }
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00b894'
  }
})