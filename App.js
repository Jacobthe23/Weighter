/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect}  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

import DatePicker from 'react-native-date-picker'
import moment from "moment"

const App = () => {
  const [name, setName] = useState("")
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState(0)
  
  const formatDate = lll => `${moment(lll).format('LL')}`

  const handlePress = () => {
    if(name == "" || date == new Date()){
      alert("The name or the date is missing in action. Wefuge man");
      return;
    }
const Weight = {

"A":11,
"B":22,
"C":33,
"D":44,
"E":55,
"F"	:66,
"G"	:77,
"H"	:81,
"I"	:92,
"J"	:13,
"K" :24,
"L"	:35,
"M"	:46,
"N"	:57,
"O"	:61,
"P"	:72,
"Q"	:83,
"R"	:94,
"S"	:15,
"T"	:26,
"U"	:37,
"V"	:41,
"W"	:52,
"X"	:63,
"Y"	:74,
"Z"	:85
    }

    const Nam = name.toUpperCase();
    let count = 0;
    Object.entries(Weight).forEach(item => {
      let [key, value] = item;
      for (var i = 0; i < Nam.length; i++) {
        if(Nam.charAt(i) == key){
          count = count + value
        }
      }
    })
   
    var date1 = moment(new Date(), 'DD-MM-YYYY');
    var date2 = moment(date, 'DD-MM-YYYY');
    var finalDate = date1.diff(date2, "years")
if(finalDate < 0){
  alert("The year can not be greater than current year. Wefuge man");
  return;
}
setAge(finalDate)
setWeight(count)
  }
  return (
    <View style = {styles.container}>
     <View style = {styles.header}>
<Text style = {{fontSize: 20, textAlign: 'center', fontWeight: "bold"}}>Date and Name Weight Calculator</Text>
     </View>

     <View style = {styles.body}>
<TextInput placeholder = "Enter your name"  style = {{marginHorizontal: '2%'}} value = {name} onChangeText = {text =>setName(text)}/>

<View style = {styles.buttons}>
      <Button title="Date of Birth" onPress={() => setOpen(true)} />
      <DatePicker
       display="inline"
        modal
        open={open}
        date={date}
        mode = "date"
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <View style = {{marginTop: '3%'}}>
      <Button title = "Submit" onPress = {handlePress} />
      </View>
      
    </View>

     </View>

     <View style = {styles.foot}>
<View>
  <Text style = {{fontSize: 20, fontWeight: "bold"}}>Results</Text>
  <Text>------------------------------------------------------------------</Text>
  </View>

  <View>
    <Text style = {{fontSize: 15, fontWeight: "bold"}}>Entered Date</Text>
  <Text >{formatDate(date)}</Text>
  </View>
<View>
  <Text style = {{fontSize: 15, fontWeight: "bold"}}>Name Weight</Text>
  <Text>{weight}</Text>
</View>
<View>
  <Text style = {{fontSize: 15, fontWeight: "bold"}}>Years</Text>
  <Text>{age}</Text>
</View>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.2
  },
  body: {
    flex: 0.4,
    
  },
  foot: {
    flex: 0.4,
    marginHorizontal: '2%'
  },
  buttons: {
    marginHorizontal: '2%'
  }
});

export default App;
