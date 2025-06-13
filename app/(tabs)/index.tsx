import {Link} from 'expo-router'
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 20, fontFamily: 'SF Pro Display, sans-serif' }}>Hello there!</Text>
    </View>
  );
}

//styles thingy below (calls were above)

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    
    width: 200, 
    height: 20, 
    backgroundColor: "coral", 
    borderRadius: 8, 
    textAlign: "center",
  }
})