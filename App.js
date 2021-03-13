// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import NumericInput from 'react-native-numeric-input';
import {View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './styles/styles';



export default class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
        arv: 0,
        maxPerARV : 0,
        er: 0,
        wf: 10000,
        cc: 0, 
        mao: 0
    }
    
};
getClosingMao=()=> 
{
  let arvNum=parseInt(this.state.arv);
  let maxPerARVNum=parseFloat(this.state.maxPerARV);
  let erNum=parseInt(this.state.er);
  let wfNum=parseInt(this.state.wf);
  let ccNum=parseFloat(this.state.cc);
  let maoNum=parseInt(this.state.mao);

  let discount = arvNum * maxPerARVNum; 
  let estimatedRepairs = discount - erNum;
  let wholesaleFee = estimatedRepairs - wfNum;
  let closingCost = wholesaleFee * .03;
  let maxAllowedOffer = wholesaleFee - (wholesaleFee * .03);
  this.setState({
     mao: maxAllowedOffer,
     cc: closingCost
  })
  
};
// getClosingCost = (arv = this.state.arv, maxPerARV=this.state.maxPerARV, er = this.state.er, wf = this.state.wf)=> {

  
//   let discount = arv * maxPerARV;

//   let estimatedRepairs = discount - er;

//   let wholesaleFee = estimatedRepairs - wf;

//   let closingCost = wholesaleFee * .03;

//   let maxAllowedOffer = wholesaleFee - (wholesaleFee * .03);
//   this.setState({
//       mao: maxAllowedOffer,
//       cc: closingCost
//   })
// }

clearForm = (arv = this.state.arv, maxPerARV=this.state.maxPerARV, er=this.state.er, wf=this.state.wf, mao=this.state.mao)=> {
  
  let discount = arv * maxPerARV;
   this.setState({
       arv: 0,
       maxPerARV: 0
   })
  

  let estimatedRepairs = discount - er;
  this.setState({
      er: 0
  })
  

  let wholesaleFee = estimatedRepairs - wf;
  this.setState({
      wf: 10000
  })
  

  let closingCost = wholesaleFee * .03;
  this.setState({
      cc: 0
  })
  

  let maxAllowedOffer = wholesaleFee - (wholesaleFee * .03);
  this.setState({
      mao: 0,
      cc: 0
  })
}


change = e => {
   this.setState({
      [e.target.name]: e.target.value//e.target.name equals e.target.value

    });
  };
// change = e => {
 
//   this.setState({
      
//       [e.target.name]: e.target.value//e.target.name equals e.target.value

//   });
// };

  

  render(){
  return (
    <View style={styles.container}>
      <Image 
        
        style={
        {width: 190, height: 170, 
         
        }
      }
        source={require('./assets/ABWblue.jpg')}
      />
      <Text style={styles.label}>ABW MAO Calculator</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>After Repair Value</Text>
        <TextInput
        id="arv" 
        style={styles.input}
        placeholder="Enter ARV here"
        keyboardType="numeric"
        value = {this.state.arv}
        onChange={e => this.change(e)} 
        onChangeText={arv=>this.setState({arv})}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Max % ARV</Text>
        <TextInput 
        id="maxPerARV" 
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g for 70%, enter as .7"
        value={this.state.maxPerARV}
        onChange={e => this.change(e)}
        onChangeText={maxPerARV=>this.setState({maxPerARV})}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Estimated Repairs</Text>
        <TextInput 
        id="er" 
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Estimated Repairs amount here"
        value={this.state.er} 
        onChangeText={er=>this.setState({er})}
        onChange={e => this.change(e)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Wholesale Fee</Text>
        <TextInput 
        id="wf" 
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Wholesale Fee here"
        value={this.state.wf} 
        onChangeText={wf=>this.setState({wf})}
        onChange={e => this.change(e)}
        />
       </View>
        <View style={styles.calClearButtons}>
      <Button
        title="Calculate"
        onPress={e => this.getClosingMao()}
      />
      <Button 
        title="Clear Form"
        onPress={e => this.clearForm()}
      /> 
      
      </View>
      <View>
        <Text style={styles.inputContainerCcMao}>Closing Costs: {this.state.cc} </Text>
      </View>
      <View>
        <Text style={styles.inputContainerCcMao}>Maximum Allowed Offer: {this.state.mao} </Text>
      </View>
      

    </View>
  );
}
}
