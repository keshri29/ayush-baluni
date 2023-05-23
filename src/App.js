
import { Box, Button, Heading, Input, Text, VStack ,HStack, Tag, TagLabel, TagCloseButton} from '@chakra-ui/react';
import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [tags, settags] = useState([])
  const [diseases,setDiseases]= useState([]);
  const [symp, setsymp] = useState('');


  const getData=()=>{
    const queryObj={name:tags}
    axios.post('http://localhost:5000/get', queryObj).then(
      (response) => {
          let result = response.data;
          console.log(result);
      },
      (error) => {
          console.log(error);
      }
  );
  }
 const handleAdd=()=>{
  if(symp.length===0 || diseases.find(ele=>ele===symp)!==undefined){
    alert("Enter valid Symptom!!");
  }
  else{
    diseases.push(symp);
    setDiseases(diseases);
    settags(diseases)
    setsymp('');
  }
 }
  return (
    <>
    <Box minH={['50vh','60vh']} w={'100%'} backgroundImage={'linear-gradient(to  right,teal,purple)'}  >
    <VStack>
    <Box h={'100%'} w={'100%'} className='content' fontSize={['5em','9em']} paddingTop={['30%','10%']}>
     <h2>Ai Doctor</h2>
     <h2>Ai Doctor</h2>
     </Box>
     <Text paddingTop={['33%','13%']} textColor={'white'} fontSize={['1em','1em']}>Ai that tells you about what you have</Text>
    </VStack>
    </Box>
    <Box minH={'40vh'} w={'100%'} bgColor={'#F0F0F0'} display={'flex'} paddingTop={'8'}  flexDirection={'column'} justifyContent={'top'} alignItems={'center'} >
      <Text fontSize={['1em','1em']}>Enter the Symptoms</Text>
      <Input variant={'outline'} w={'20%'} marginTop={'15'} onChange={(e)=>setsymp(e.target.value)} borderColor={'#3C486B'} focusBorderColor='#3C486B' value={symp}/>
      {
        tags.length>0?<HStack paddingTop={'10'}>
          {diseases.map((i,index)=>(
            <Tag
            size={'lg'}
      key={i}
      borderRadius='full'
      variant='solid'
      bgColor={'#3C486B'} textColor={'#F0F0F0'}>
         <TagLabel>{i}</TagLabel>
      <TagCloseButton color={'#F0F0F0'} onClick={()=>{
     const disease=diseases.filter((ind)=>ind!==i);
     setDiseases(disease);
     settags([]);
     settags(disease);
     
     
      }}/>
      </Tag>
      
          ))}
        </HStack>:<></>
      } 
     <Box paddingTop={8} display={'flex'} flexDirection={'row'} w={'20%'} justifyContent={'space-around'}>
     <Button variant={'solid'} color='#3C486B' onClick={handleAdd}>Add</Button>
     <Button variant={'solid'} color='#3C486B' onClick={getData}>Check Disease</Button>
     </Box>

    </Box>
    </>
  );
  
}

export default App;
