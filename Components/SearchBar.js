import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

const SearchBar = ({myDisc, onChangeText, hello,message}) => {
    return (
        <View>
            <View>
        <Text style={styles.text}>Discription</Text>
        <View style={styles.Placeholder}>
          <TextInput
          placeholder={hello}
          value={myDisc}
          onChangeText={(discription)=> onChangeText(discription)}
          autoCapitalize='none'
          autoCorrect={false}
          onEndEditing={()=> alert(`i am searching for ${myDisc}`)}
          />
         
        </View>
      </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    Placeholder: {
    borderColor: 'white',
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 7,
    color: 'black',
    marginTop: 35,
  },
})
