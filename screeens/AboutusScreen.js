import React from 'react'
import { ScrollView, Text, View } from 'react-native'

function AboutusScreen() {
  return (
  <View>
    <ScrollView vertical>
    <Text style={{color:"green",fontSize:30,fontWeight:'800',alignSelf:'center'}}>About us!!</Text>
  <Text   style={{color:"green",fontSize:20,fontWeight:'800',textDecorationLine:'underline',marginLeft:20}}>1.Who are Kezzy Firm?</Text>
  <Text style={{fontSize:20,marginHorizontal:20}}>we  are a  Local Enterprise that operates hand in hand with both small scale and large scale farmers in ensuring that their products find a market efficiently and also helps in facilitating proper flow of food within our country</Text>
  <Text   style={{color:"green",fontSize:20,fontWeight:'800',textDecorationLine:'underline',marginLeft:20}}>2. What do we do?</Text>
  <Text style={{fontSize:20,marginHorizontal:20}}>we operate hand in hand with both small scale and large scale farmers where  they bring products through deliverers to our firm ..
  we then  find a market and and distibute the products within our country and even outside.</Text>
  <Text  style={{color:"green",fontSize:20,fontWeight:'800',textDecorationLine:'underline',marginLeft:20}}>3. Where are we located?</Text>
 <Text style={{fontSize:20,marginHorizontal:20,fontWeight:'900',textDecorationColor:'blue',textDecorationStyle:'dashed'}}>We are located in
  Nairobi county at the junction of Argwings Khodhek  road GREENSHADE Apartments .</Text>
  <Text  style={{color:"green",fontSize:20,fontWeight:'800',textDecorationLine:'underline',marginLeft:20}}>4.Our Management</Text>
  <Text    style={{color:"gray",fontSize:20,fontWeight:'800',textDecorationLine:'underline',marginLeft:20}}>Manager:</Text>
  <Text   style={{fontSize:20,marginHorizontal:20,color:'green',fontWeight:'800'}}>Keziah Ngotho/keziengotho18@gmail.com/0716304517</Text>
  <Text    style={{color:"gray",fontSize:20,fontWeight:'800',textDecorationLine:'underline',marginLeft:20}}>Director:</Text>
  <Text  style={{fontSize:20,marginHorizontal:20,color:'green',fontWeight:'800'}}>Kelsey Gathuru/kelseygathiru5@gmail.com/0797559808</Text>
  <Text    style={{color:"gray",fontSize:20,fontWeight:'800',textDecorationLine:'underline',marginLeft:20}}>Secretary:</Text>
  <Text style={{fontSize:20,marginHorizontal:20,color:'green',fontWeight:'800'}}>Israel Bazuu /Israelbazuu2@gmail.com/0741570092</Text>
  <Text    style={{color:"gray",fontSize:20,fontWeight:'800',textDecorationLine:'underline',marginLeft:20}}>Company:</Text>
  <Text  style={{fontSize:20,marginHorizontal:20,color:'green',fontWeight:'800'}}>KEZZY'S FIRM /Kezzyfirm@gmail.com/0710865076</Text>
  </ScrollView>
  </View>
  )
}

export default AboutusScreen