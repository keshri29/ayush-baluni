import { HStack,Heading,useMediaQuery,Button } from '@chakra-ui/react'
import React from 'react'
import {AiFillHeart} from 'react-icons/ai'

const Header = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
  if(!isMobile){
    return <HStack h={'10vh'} w={'full'} backgroundImage={'linear-gradient(to  right,teal,purple)'} padding={'2'}>
      <Heading textColor={'#F0F0F0'} fontSize={'5vh'}>Heading</Heading>
      <HStack>
        <Button variant={'ghost'} colorScheme={'#3C486B'}  textColor={'#F0F0F0'}>Home</Button>
      </HStack>
    </HStack>
  }
}

export default Header