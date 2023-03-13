import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const StoreScreen = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.82.238:3000/displayStore",)
      .then(response => response.json())
      .then(data => setStoreData(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text    style={{color:'black',fontSize:20,fontWeight:'800'}}>{item.product_name}</Text>
      <Text    style={{fontSize:25}}>{item.store}</Text>
    </View>
  );

  return (
    <View>
      <Text style={{marginLeft:160,fontSize:25,fontWeight:'900',marginTop:60}}>OUR STORE ):</Text>
    <FlatList style={{marginLeft:40,marginTop:20}}
      data={storeData}
      renderItem={renderItem}
      keyExtractor={item => item.product_name}
    />
    </View>
  );
};

export default StoreScreen;
