import React, { useState } from 'react'

import {
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  StyleSheet
} from 'react-native'

import destinations from '../data/destinations'
import DestinationCard from '../components/DestinationCard'

export default function SearchScreen({ navigation }) {
  const [search, setSearch] = useState('')

  const filtered = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Search Destinations
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Search destination..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00b894'
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15
  }
})
