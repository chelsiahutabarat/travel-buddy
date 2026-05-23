import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default function DestinationCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.location}>
          {item.location}
        </Text>

        <Text style={styles.price}>
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3
  },

  image: {
    width: '100%',
    height: 180
  },

  content: {
    padding: 12
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  location: {
    color: 'gray',
    marginTop: 4
  },

  price: {
    color: '#00b894',
    marginTop: 6,
    fontWeight: 'bold'
  }
})