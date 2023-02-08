import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable, Image,TextInput } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Use the following code in cmd to delay the SplashScreen: npx expo install expo-splash-screen
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);


function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bruschetta Recipe</Text>
      <Image style={styles.image}source={require('C:/Users/madyl/HealthyRecipes/assets/bruschetta.png')} />
      <TextInput style={styles.textInput}
          placeholder="Enter the Number of Servings"
          onChangeText={newCount => setCount(newCount)}
          defaultValue={count}
        />
{/* Don't forget to add your constant to the onPress action so it can be bassed to another function */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('Recipe',{count})}>
              <Text style={styles.buttonText}>View Recipe</Text>
        </Pressable>
    </View>
  );
}
// Don't forget to add route so you can pull other parameters from other functions
function RecipeScreen({ route,navigation }) {
  // You'll need to make another constant to use any parameters from another function
  const { count } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.recipeLarge}>Bruschetta</Text>
      <Text></Text>
      <Text style={styles.recipeMedium}>Ingredients</Text>
      <Text style ={styles.recipeText}>{count <= 1 ? 4 + ' plum tomatoes' : count * 4 +' plum tomatoes' }</Text>
      <Text style ={styles.recipeText}>{count <= 1 ? 6 + ' basil leaves' : count * 6 +' basil leaves' }</Text>
      <Text style ={styles.recipeText}>{count <= 1 ? 3 + ' garlic cloves, chopped' : count * 3 +' garlic cloves, chopped' }</Text>
      <Text style ={styles.recipeText}>{count <= 1 ? 3 + ' TB olive oil' : count * 3 +' TB olive oil' }</Text>
      <Text></Text>
      <Text style={styles.recipeMedium}>Directions</Text>
      <Text style ={styles.recipeText}>Combine the ingredients, add salt to taste. Top French bread slices with mixture.</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
         {/* The options will show the text component at the top of the screen */}
        <Stack.Screen name="Home" 
              component={HomeScreen} options={{ title: 'Healthy Recipes' ,headerStyle: {
                backgroundColor: '#f4511e',},headerTintColor: '#fff', }} />
        <Stack.Screen name="Recipe" component={RecipeScreen} options={{ title: '' ,headerStyle: {
                backgroundColor: '#f4511e',},headerTintColor: '#fff', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topColor:{
    headerStyle:{
      headerTintColor: '#fff',
      backgroundColor: '#f98b88',
    }
    
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10, 

  },
  recipeLarge:{
    fontSize: 42,
  },
  recipeMedium:{
    
    fontSize: 32,
    paddingLeft: 28,
    alignSelf: 'baseline'
    
  },
  recipeText:{
    paddingLeft: 40,
    alignSelf: 'baseline',
    fontSize: 28,
  },
  buttonText:{
    color:'white',
    fontSize: 18,
  },
  text:{
    padding: 10,
    fontSize: 38,
    marginTop: 5,
    textAlign: 'center',
  },
  textInput:{
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    width:255,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
  }, 
  image:{
    
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  
  },
  
});

export default App;
