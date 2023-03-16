import React, { useState, useRef,useEffect } from "react";
import { Picker } from "@react-native-picker/picker";

import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollViewComponent,
  TextInput,
} from "react-native";
import { VictoryLine } from "victory-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "@react-native-community/blur";
import { Button } from "@mui/material";
import { Card } from "react-native-paper";
import axios from "axios";

function ProductsScreen() {
  const navigation = useNavigation();
  const data = [
    { x: 1, y: 4 },
    { x: 6, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 9 },
  ];
  const [selectedProduct, setSelectedProduct] = useState();
  const [quantity, setquantity] = useState(0);
  const [product_name, setProduct_name] = useState([]);
  const pickerRef = useRef();
 

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
//prod
useEffect(() => {
  axios.get("http://192.168.179.238:3000/products")
    .then((response) => {
      setProduct_name(response.data.map((product) => product.product_name));
    })
    .catch((error) => {
      console.error(error);
    });
}, []);



//add quantity
const handleRECEIVE =  () => {
  console.log("calling here");
  axios.post("http://192.168.179.238:3000/updateproducts", {
    product_name: selectedProduct,
    quantity: quantity
  })
  .then(data => {
    // Doing something with the data
    if (data.error) {
      setErrorMessage('invalid quantity');
    } else {
      navigation.navigate("Home");
    }
  })
  .catch((error) => {
    console.error(error);
  });
};
 
//sell
const handleSELL =  () => {
  console.log("calling here");
  axios.post("http://192.168.179.238:3000/sellproducts", {
    product_name: selectedProduct,
    updatedQuantity: quantity
  })
  .then(data => {
    // Doing something with the data
    if (data.error) {
      setErrorMessage('invalid quantity');
    } else {
      navigation.navigate("Sales");
    }
  })
  .catch((error) => {
    console.log(error);
  });
};
 
  

  


     
   

  return (
    <View>
      <Image
        source={require("../assets/fertilizer.png")}
        resizeMode="contain"
        style={{
          alignSelf: "center",
          paddingLeft: 80,
          width: 50,
          height: 70,
          paddingTop: 40,
        }}
      ></Image>

      <ScrollView vertical>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "900",

            fontStyle: "italic",
          }}
        >
          Our products
        </Text>
        <View style={{ marginHorizontal: 40 }}>
        <Picker
  style={{
    color: "black",
    fontSize: 35,
    fontWeight: "900",
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 9,
    borderColor: "green",
  }}
  selectedValue={selectedProduct}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedProduct(itemValue)
  }
>
  {product_name.map((product_name) => (
    <Picker.Item
      key={product_name}
      label={product_name}
      value={product_name}
    />
    
  ))}
</Picker>




        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 1,
            marginTop: 5,
          }}
        >
          <TextInput
           // textContentType={"quantity"}
            onChangeText={(text) => setquantity(text)}
           // value={quantity}
            autoCompleteType={"quantity"}
            // clearButtonMode={'while-editing'}
            // keyboardType={'email-address'}
            // returnKeyLabel={'next'}
            // returnKeyType={'next'}
            placeholder="Quantity"
            color="black"
            style={{
              flex: 1,
              padding: 10,
              // borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 15,
              // backgroundColor:'gray',
              borderRadius: 6,
              fontWeight: "700",
              marginTop: 6,
              marginHorizontal: 40,
              borderColor: "green",
              borderLeftWidth: 3,
              borderRightWidth: 3,
              borderBottomWidth: 3,
              borderTopWidth: 3,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              alignSelf: "center",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
               onPress={handleRECEIVE}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 90,
                elevation: 18,
                shadowColor: "gray",
                shadowRadius: 60,
                backgroundColor: "green",
                padding: 1,
                marginLeft: 70,
              }}
           
            >
              <Text style={{ color: "black", fontSize: 15, fontWeight: "900" }}>
                RECEIVE
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignSelf: "center",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
           onPress={handleSELL }
              style={{
                paddingHorizontal: 30,
                paddingVertical: 9,
                borderRadius: 90,
                elevation: 18,
                shadowColor: "gray",
                shadowRadius: 60,
                backgroundColor: "green",
                padding: 1,
                marginLeft: 40,
              }}
            >
              <Text style={{ color: "black", fontSize: 15, fontWeight: "900" }}>
                SELL
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "900",
            paddingTop: 50,
            fontStyle: "italic",
            textDecorationLine: "underline",
          }}
        >
          Featured plans
        </Text>

        <View style={{ flex: 1, marginTop: 10, paddingTop: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <ScrollView horizontal>
              <Card
                style={{
                  backgroundColor: "green",
                  marginLeft: 10,
                  width: 180,
                  marginRight: 20,
                  height: 260,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    color: "black",
                    fontWeight: "900",
                    textDecorationLine: "underline",
                  }}
                >
                  Butcher shop business-plan
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 5,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  startup butcher and meat shop ,selling cut-to-order free-range
                  and wild game meat to retail customers and wholesale to
                  restaurants and caterers
                </Text>
              </Card>
              <Card
                style={{
                  backgroundColor: "green",
                  marginLeft: 10,
                  width: 180,
                  height: 260,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    color: "black",
                    fontWeight: "900",
                    textDecorationLine: "underline",
                  }}
                >
                  Feed and farm Supply business-plan
                </Text>
                <Text
                  style={{ fontSize: 18, marginLeft: 5, fontWeight: "bold" }}
                >
                  startup shop which makes and sells custom livestock and
                  pet-food to local farmers and residents{" "}
                </Text>
              </Card>
            </ScrollView>
          </View>

          <VictoryLine
            data={data}
            style={{
              data: { stroke: "green", strokeWidth: 5, paddingTop: 20 },
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  prod: {
    alignSelf: "center",
    alignContent: "center",
    fontSize: 25,
    paddingBottom: 30,
    fontWeight: "bold",
  },
});
export default ProductsScreen;
