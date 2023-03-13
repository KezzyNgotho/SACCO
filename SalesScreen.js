import React ,{useEffect,useState}from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityBase,
   
  } from "react-native";
  import axios from "axios";

function SalesScreen() {
 // const [sales, setSales] = useState([]);
 const [salesData, setSalesData] = useState([]);

  const fetchSalesData = () => {
    axios.get("http://192.168.82.238:3000/displaySales",
    )
      .then(response => {
        setSalesData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchSalesData();
  }, []);



  return (
    <View style={{flex:1,backfaceVisibility:'hidden',backgroundColor:'gray'}}>
      <Text style={{fontSize:25,alignSelf:'center',color:'black',fontWeight:'900'}}>OUR SALES!!</Text>
        <View style={{alignSelf: "center",
    marginTop: 30}}> 
        <TouchableOpacity
         onPress={fetchSalesData}
        style={{ paddingHorizontal: 8,
                paddingVertical: 10,
                borderRadius: 90,
                elevation: 18,
                shadowColor: "gray",
                shadowRadius: 60,
                backgroundColor: "green",
                padding: 1,
               // marginLeft: 10,
                }}>
          <Text  style={{fontSize:30,fontWeight:'700'}}>Reload</Text>
        </TouchableOpacity>
        </View >
        {salesData.map(product => (
      <View style={{marginLeft:30}}
       key={product.product_name}>
        <Text  style={{color:'black',fontSize:20,fontWeight:'800'}}>{product.product_name}</Text>
        <Text style={{fontSize:25}}>{product.sales}</Text>
      </View>
    ))}
    </View>
  )
}

export default SalesScreen