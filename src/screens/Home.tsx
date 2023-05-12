import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Center, HStack, Text, VStack } from "native-base";
import { useState } from "react";


export function Home(){
    const [groupSelected, setGroupSelected] = useState('costa');
    return(
        <VStack flex={1}>
           <HomeHeader/>
           <HStack>

           <Group 
           name="costas" 
           isActive={groupSelected === "costa"}
           onPress={()=> setGroupSelected("costa")}
            />

           <Group
            name="biceps"
            isActive={groupSelected === "biceps"}
            onPress={()=> setGroupSelected("biceps")} />

           <Group
            name="triceps"
            isActive={groupSelected === "triceps"}
            onPress={()=> setGroupSelected("triceps")} />

            <Group
            name="ombros"
            isActive={groupSelected === "ombros"}
            onPress={()=> setGroupSelected("ombros")} />
           
          
           </HStack>
          
        </VStack>
    )
}