import React from 'react'



import { View ,Text,Image,FlatList, ImageBackground,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Icon from "react-native-vector-icons/MaterialIcons";

function HomeScreen() {

  const navigation = useNavigation();

  const slides = [
    { key: '1', backgroundColor: 'red', text: 'Slide 1' },
    { key: '2', backgroundColor: 'green', text: 'Slide 2' },
    { key: '3', backgroundColor: 'blue', text: 'Slide 3' },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image source={{ uri: item.url }} style={{ flex: 1 }} resizeMode="contain" />
      </View>
    );
  };
  //backend
 
  return (
    <ScrollView  vertical>
    <ImageBackground
    source={require('../assets/sunny-meadow-landscape.jpg')}
    style={{ flex: 1 }}
  >
   
    <View>
   
      
     
      <Image
             // source={require("../assets/business-centre.png")}
             source={require("../assets/field.png")}
              resizeMode="contain"
              style={{
             
                paddingLeft: 80,
                width: 50,
                height: 70,
              }}
             // style={styles.saveimg}
            ></Image>
             <Text style={{ fontSize:25,fontWeight:'900'}}> KEZZY'S </Text>
            
             <View style={{ flexDirection: "row" ,paddingTop:60,paddingLeft:30}}>

<TouchableOpacity   onPress={() => navigation.navigate('Overview')}
style={{

  paddingHorizontal: 30,
  paddingVertical: 9,
  borderRadius: 20,
  elevation: 8,
  shadowColor: '#0047BB',
  shadowRadius: 8,
  backgroundColor: 'green',
  marginRight:10
}}>
  <Text>overview</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={() => navigation.navigate('Aboutus')}
  style={{

paddingHorizontal: 30,
paddingVertical: 9,
borderRadius: 20,
elevation: 8,
shadowColor: '#0047BB',
shadowRadius: 8,
backgroundColor: 'green',
marginRight:10
}}>
  <Text>About us</Text>
</TouchableOpacity>
<TouchableOpacity    onPress={() => navigation.navigate('Talk to us')}
 style={{

paddingHorizontal: 30,
paddingVertical: 9,
borderRadius: 20,
elevation: 8,
shadowColor: '#0047BB',
shadowRadius: 8,
backgroundColor: 'green',
}}>
  <Text>Talk to us</Text>
</TouchableOpacity>
 </View>
        <View style={{ flexDirection: "row", paddingTop:1,paddingBottom:60,marginVertical:20,marginBottom:1,paddingLeft:30}}>
      
           <ScrollView horizontal  >
    <TouchableOpacity
    onPress={() => navigation.navigate('Products')}>
    <Image
              source={require("../assets/add-to-cart.png")}
              resizeMode="contain"
              style={{
                alignSelf: "center",
                paddingLeft: 80,
                width: 50,
                height: 50,
                paddingTop:50,
              
              }}
             // style={styles.saveimg}
            ></Image>
             <Text style={{fontSize:15,fontWeight:'bold',alignSelf:'center',color:'black',paddingLeft:9}}>PRODUCTS</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => navigation.navigate('Sales')}>
      <Image
              source={require("../assets/direct-marketing.png")}
              resizeMode="contain"
              style={{
                alignSelf: "center",
                paddingLeft: 80,
                marginRight: 9,
                marginLeft: 30,
                width: 50,
                height: 50,
              }}
             // style={styles.saveimg}
            ></Image>
      <Text   style={{fontSize:15,fontWeight:'bold',alignSelf:'center',color:'black'}}>SALES</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.navigate('Store')}>
      <Image
             // source={require("../assets/business-centre.png")}
             source={require("../assets/business-center.png")}
              resizeMode="contain"
              style={{
                alignSelf: "center",
                paddingLeft: 80,
                width: 50,
                height: 50,
              }}
             // style={styles.saveimg}
            ></Image>
      <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}> STORE</Text>
      </TouchableOpacity>

      <TouchableOpacity   onPress={() => navigation.navigate('Delivery')}>
      <Image
             // source={require("../assets/business-centre.png")}
             source={require("../assets/truck.png")}
              resizeMode="contain"
              style={{
                alignSelf: "center",
                paddingLeft: 100,
                width: 50,
                height: 50,
                
              }}
             // style={styles.saveimg}
            ></Image>
      <Text style={{fontSize:15,fontWeight:'bold',color:'black',paddingLeft:16}}>DELIVERY</Text>
      </TouchableOpacity>
      
     </ScrollView>
     
    
    
    </View>
    
   
    <View style={{flexDirection: "row"}}>
   <Text style={{marginBottom:2,fontSize:25,paddingLeft:"10%",fontWeight:'900',color:'green'}} >Tips</Text>
   <Icon
        style={{ alignSelf: "center",paddingLeft:1,marginBottom:30 }}
        name="info"
        size={30}
        color="green"
      />
   </View>
      
    
    <ScrollView  horizontal >

      <View style={{flexDirection: "row",color:'red',backgroundColor: 'white', borderRadius: 1,padding:10,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },elevation: 2,marginLeft:2,marginRight:2,shadowOpacity: 0.2,
    shadowRadius: 4,paddingTop:1,width:150,height:150}}>


    
     <Image
             // source={require("../assets/business-centre.png")}
             source={require("../assets/top-view-fresh-bell-peppers-different-colored-with-brown-wooden-desk-white-background-salad-diet-ripe-meal-color-photo-healthy-life.jpg")}
              resizeMode="contain"
              style={{
               
                marginTop:1,
                alignSelf:'center',
                  width: 140,
                  height: 290,
                
              }}
             // style={styles.saveimg}
            ></Image>
    
     
        
   </View>
  
           
   <View style={{flexDirection: "row",color:'red',backgroundColor: 'white', borderRadius: 1,padding:10,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },elevation: 2,marginLeft:2,marginRight:2,shadowOpacity: 0.2,
    shadowRadius: 4,paddingTop:1,width:150,height:150}}>


     <Image
             // source={require("../assets/business-centre.png")}
             source={require("../assets/10480.jpg")}
            resizeMode="contain"
              style={{
               
                marginTop:1,
              alignSelf:'center',
                width: 140,
                height: 290,
                
           

              }}
             // style={styles.saveimg}
            ></Image>
           
           
           
   </View>
   <View style={{flexDirection: "row",color:'red',backgroundColor: 'white', borderRadius: 1,padding:10,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },elevation: 2,marginLeft:9,marginRight:9,shadowOpacity: 0.2,
    shadowRadius: 4,paddingTop:1,width:150,height:150}}>


     <Image
             // source={require("../assets/business-centre.png")}
             source={require("../assets/5460300.jpg")}
            resizeMode="contain"
              style={{
               marginTop:1,
              alignSelf:'center',
                width: 140,
                height: 290,
                
           

              }}
             // style={styles.saveimg}
            ></Image>
           
           
           
   </View>
   </ScrollView>
   
   <View style={{ flexDirection: "row" ,paddingTop:1,paddingLeft:'7%',paddingTop:20,marginRight:20}}>

<TouchableOpacity 
style={{

  paddingHorizontal: 20,
  paddingVertical: 9,
  borderRadius: 90,
  elevation: 8,
  shadowColor: '#0047BB',
  shadowRadius: 8,
  backgroundColor: 'green',
  marginRight:10,

  

 
}}>
   <Text style={{fontSize:17}}>History</Text>
  
  <Image
            source={require("../assets/next.png")}
           
            resizeMode="contain"
              style={{
               marginTop:1,
              alignSelf:'center',
                
              }}
             // style={styles.saveimg}
            ></Image>
           
 
</TouchableOpacity>
</View>

    </View>
   
   </ImageBackground>
   </ScrollView>

  )
}
const styles = StyleSheet.create({
  iconButton: {
    margin: 5,
  },
});

export default HomeScreen