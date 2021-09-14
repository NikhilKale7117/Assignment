import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Button,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const Profile = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [image , setImage]=useState('../Components/Images/logo.png');
  console.log(user);

  useEffect(() => {
    fetch('https://gorest.co.in/public/v1/users')
      .then(response => response.json())
      .then(json => setUser(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const photoFromCamera=()=>{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path)
    });
  };

  const photoFromGallary=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path)
    });
  };

  return (
    <View style={{backgroundColor: 'green', flex: 1, padding: 50}}>
      <View style={{justifyContent:"center",alignItems:"center"}}>

      <Image style={styles.image} source={{uri: image}}/>
      <Button title='Edit Image' onPress={photoFromGallary}/>
      <Text></Text>
      <Button title='Take Photo' onPress={photoFromCamera}/>
      </View>
      <View>
        {isLoading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <View>
            <Text>API Data is here .....</Text>

            <FlatList
            // horizontal
            showsVerticalScrollIndicator={false}
              data={user.data}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={styles.loading}>{`  ${item.id} - `}</Text>
                <View style={styles.Placeholder}>
                  <Text style={[styles.textInput,{color:"gold", fontWeight:"bold", fontSize:20}]}>{`${item.name}`}</Text>
                  <Text style={styles.textInput}>{`${item.email}`}</Text>
                  <Text 
                  style={(item.status==='active')?styles.textInput1:styles.textInput2}>
                    
                    {`${item.status}`}</Text>
                </View>
                </View>
              )}
            />
          </View>
        )}
      </View>
      <Button title='Go to Image picker' onPress={()=>navigation.navigate('ImageSelect')}/>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'gold',
    borderWidth: 1,
    backgroundColor: 'gold',
    marginTop: 40,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 18,
    marginBottom: 7,
    color: 'black',
    marginTop: 35,
  },
  Placeholder: {
    borderColor: 'black',
backgroundColor:"gray",
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop:10,
    flex:1,
    alignContent:"flex-end",
    marginBottom:20
  },
  textInput: {
    color: 'black',
    alignItems:"center",
    margin:20
  },
  textInput1: {
    color: 'green',
    alignItems:"center",
    margin:20
  },
  textInput2: {
    color: 'red',
    alignItems:"center",
    margin:20
  },
  loading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  image:{
    height:200,
    width:200,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
  }
});
