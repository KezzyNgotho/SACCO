import update from 'lodash/update';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View ,  ScrollView,} from 'react-native';
import axios from 'axios';

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);


  useEffect(() => {
    axios.get('http://192.168.254.238:3000/History').then((response) => {
      setHistory(response.data);
    });
  }, []);
  

  const renderItem = ({ item }) => (
  
    <View>
 

      <Text    style={{color:'black',fontSize:20,fontWeight:'800'}}>{item.product_name}</Text>
      <Text    style={{fontSize:35}}>{item.store}</Text>
    
    </View>
  );

  return (
    <View style={{flex:1}}>
       <ScrollView vertical>
      <Text style={{marginLeft:140,fontSize:30,fontWeight:'900'}}>HISTORY):</Text>
    <View>
      {history.map((transaction) => (
        <Text  style={{fontSize:20,fontWeight:'500',color:'green',marginLeft:10}}
        key={transaction.id}>
         {transaction.id}-{transaction.product_name} -{transaction.transaction_type}-{transaction.quantity}-{transaction.created_at}
        </Text>
      ))}
    </View>

    </ScrollView>
    </View>
  );
  
};



export default HistoryScreen;