import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Picker,Button, Alert, TextInput, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Detail({navigation, route}) {
  const [datas, setData] = React.useState([])   
  React.useEffect(() => {
    go()
  }, [route.params?.post]);

  async function go(val){
      let name = route.params?.post
      let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
      let data = await resp.json()
     
      setData(data.drinks[0])
    }

    
  return (
    <ScrollView style={styles.container}>
      
      
      <Text style={{marginTop:15, color:'#fff', fontSize:29, textAlign:'center'}}>{datas.strDrink}</Text>
      <Image style={styles.img} source={{uri:datas.strDrinkThumb}}/>
      <Text style={{marginTop:15, color:'#fff', fontSize:25 , textAlign:'center'}}>{datas.strInstructions}</Text>
      <Text style={{marginTop:15, color:'#fff', fontSize:30, textAlign:'center'}}>Ingridients</Text>
      <Text style={{marginTop:10, color:'#504bdd', fontSize:20,textAlign:'center'}} onPress={() => navigation.navigate('Ingridient', { name:datas.strIngredient1 })} >{datas.strIngredient1}</Text>
      <Text style={{marginTop:10, color:'#504bdd', fontSize:20,textAlign:'center'}} onPress={() => navigation.navigate('Ingridient', { name:datas.strIngredient2 })}>{datas.strIngredient2}</Text>
      <Text style={{marginTop:10, color:'#504bdd', fontSize:20,textAlign:'center'}} onPress={() => navigation.navigate('Ingridient', { name:datas.strIngredient3 })}>{datas.strIngredient3}</Text>
      <Text style={{marginTop:10, color:'#504bdd', fontSize:20,textAlign:'center'}} onPress={() => navigation.navigate('Ingridient', { name:datas.strIngredient4 })}>{datas.strIngredient4}</Text>
      <Text style={{marginTop:15, color:'#fff', fontSize:30,textAlign:'center'}}>Measure</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20, textAlign:'center'}}>{datas.strMeasure1}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20,textAlign:'center'}}>{datas.strMeasure2}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20,textAlign:'center'}}>{datas.strMeasure3}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20,textAlign:'center'}}>{datas.strMeasure4}</Text>
    
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  
   img:{
     width:350,
     height:250,
     marginTop:15,
   }
});
