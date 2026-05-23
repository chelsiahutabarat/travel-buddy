import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import SearchScreen from './screens/SearchScreen'
import FavoritesScreen from './screens/FavoritesScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeStack({ favorites, setFavorites }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
      >
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="Detail"
        options={{ title: 'Destination Detail' }}
      >
        {(props) => (
          <DetailScreen
            {...props}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

function SearchStack({ favorites, setFavorites }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchHome"
        options={{ headerShown: false }}
      >
        {(props) => <SearchScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="Detail"
        options={{ title: 'Destination Detail' }}
      >
        {(props) => (
          <DetailScreen
            {...props}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default function App() {
  const [favorites, setFavorites] = useState([])

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName

            if (route.name === 'HomeTab') {
              iconName = 'home'
            } else if (route.name === 'Search') {
              iconName = 'search'
            } else if (route.name === 'Favorites') {
              iconName = 'heart'
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            )
          },

          tabBarActiveTintColor: '#00b894',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="HomeTab">
          {() => (
            <HomeStack
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Search">
          {() => (
            <SearchStack
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Favorites"
          options={{
            tabBarBadge:
              favorites.length > 0
                ? favorites.length
                : null
          }}
        >
          {() => (
            <FavoritesScreen favorites={favorites} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}