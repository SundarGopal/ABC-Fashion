import { useState,useEffect } from "react";
import {Dimensions} from "react-native";

export default Orientation =() =>{

    const [screenInfo, setScreenInfo] =useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange=(result)=>{
            screenInfo(result.screen);
        }

        Dimensions.addEventListener('change',onChange);

        return() => Dimensions.removeEventListener('change',onChange);
        
    }, [])
    
    // return screenInfo.height>screenInfo.width

    return {
        ...screenInfo,
        isPotrait: screenInfo.height > screenInfo.width
    }
}