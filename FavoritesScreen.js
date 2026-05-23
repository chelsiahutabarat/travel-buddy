import React from 'react'

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'

import DestinationCard from '../components/DestinationCard'

export default function FavoritesScreen({
  favorites
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Favorite Destinations
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationCard item={item} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No favorites yet
          </Text>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5'
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00b894',
    marginBottom: 15
  },

  empty: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: 'gray'
  }
})