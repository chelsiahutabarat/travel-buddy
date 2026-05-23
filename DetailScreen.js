import React from 'react'

import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native'

export default function DetailScreen({
  route,
  favorites,
  setFavorites
}) {
  const { destination } = route.params

  const addToFavorites = () => {
    const alreadyExist = favorites.find(
      (item) => item.id === destination.id
    )

    if (alreadyExist) {
      Alert.alert('Info', 'Already in favorites')
      return
    }

    setFavorites([...favorites, destination])

    Alert.alert(
      'Success',
      'Added to favorites'
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: destination.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>
          {destination.name}
        </Text>

        <Text style={styles.location}>
          {destination.location}
        </Text>

        <Text style={styles.price}>
          {destination.price}
        </Text>

        <Text style={styles.description}>
          {destination.description}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={addToFavorites}
        >
          <Text style={styles.buttonText}>
            Add to Favorites
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  image: {
    width: '100%',
    height: 300
  },

  content: {
    padding: 20
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold'
  },

  location: {
    fontSize: 18,
    color: 'gray',
    marginTop: 8
  },

  price: {
    fontSize: 22,
    color: '#00b894',
    fontWeight: 'bold',
    marginTop: 10
  },

  description: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24
  },

  button: {
    backgroundColor: '#00b894',
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})