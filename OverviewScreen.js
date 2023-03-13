import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-paper";

function OverviewScreen() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text
        style={{
          color: "green",
          fontSize: 45,
          fontWeight: "900",
          alignSelf: "center",
          textDecorationLine:'underline',
        }}
      >
        overview!!
      </Text>
      <Text style={{fontSize:20,color:'green',textDecorationLine:'underline',fontWeight:'600',marginLeft:20}}>OBJECTIVES:</Text>
      <ScrollView vertical  >
      <View  style={{ flexDirection: "row",marginTop:10}}>
    

        <Card style={{backgroundColor:'gray',width:190,height:190,marginLeft:15}}>
<Text  style={{
          color: "black",
         textDecorationLine:'underline',
          fontWeight: "900",
          alignSelf: "center",
          fontSize:20
        }}>Factor efficiency:</Text>
       
       
        <Text style={{fontSize:16,color: "black",}}>We aim at  understanding different input levels in comparison to the effect of change in output and determine the most profitable input output combination.</Text>
        </Card>
      
     
      <Card style={{backgroundColor:'gray',width:190,height:190,marginTop:120}}>
<Text  style={{
          color: "black",
          fontSize:20,
          fontWeight: "900",
          alignSelf: "center",
          textDecorationLine:'underline',
        }}>Protect diversity:</Text>
        <Text  style={{fontSize:16,color: "black",}}
        >Educate farmers on soil management, pollution control, energy efficiency, crop protection, water management, nature conservation and livestock management, integrity and safety are maintained</Text>
</Card>
    
      </View>
      <View  style={{ flexDirection: "row"}}>
    
        <Card   style={{backgroundColor:'gray',width:200,height:190,marginLeft:8}}>
<Text  style={{
          color: "black",
         textDecorationLine:'underline',
          fontWeight: "900",
          alignSelf: "center",
          fontSize:20
        }}>Evaluate resources:</Text>
      <Text   style={{fontSize:16,color: "black",}}>Data about land, water, labor, plants, animals, and renewable resources are gathered to plan their exploitation in an efficient way that will produce the optimum result.</Text>
      </Card>
      
     
   
        
      <Card style={{backgroundColor:'gray',width:200,height:190,marginTop:120}}>
<Text  style={{
          color: "black",
          fontSize:20,
          fontWeight: "900",
          alignSelf: "center",
          textDecorationLine:'underline',
        }}>Improve productiviy</Text>
        <Text  style={{fontSize:16,color: "black",}}
        >Educate farmers on soil management, pollution control, energy efficiency, crop protection, water management, nature conservation and livestock management, integrity and safety are maintained</Text>
      </Card>
      
  
      </View>
      </ScrollView>
    </View>
  );
}

export default OverviewScreen;
