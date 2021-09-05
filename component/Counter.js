import React, {useState} from 'react';

import {View, Button, TouchableOpacity,Text} from 'react-native'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
IconAntDesign.loadFont()

function Counter (){
    const initialCount = 0
    const [count,setCount] = useState(initialCount);
    return(
        <View style={{flexDirection:'row',alignItems:'flex-start',borderWidth:0,paddingTop:10}}>
            
            <TouchableOpacity onPress={()=>setCount(count-1)} style={{borderWidth:0}}>
            <IconAntDesign name='minuscircleo' size={20} color='gray' style={{ paddingRight: 5, marginLeft: 0, borderWidth: 0 }} />
                </TouchableOpacity>
            <Text style={{fontSize:15,color:'#636976'}}>{count}</Text>
            <TouchableOpacity onPress={()=>setCount(count+1)} style={{borderWidth:0}}>
            <IconAntDesign name='pluscircleo' size={20} color='gray' style={{ paddingLeft:5, marginLeft: 0, borderWidth: 0 }} />
                </TouchableOpacity>
            </View>
    )
}

export default Counter;