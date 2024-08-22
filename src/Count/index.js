import { background, Box, Image, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter ,Stack,Heading,ButtonGroup} from '@chakra-ui/react'

export function Count(props) {
    const [count, setCount] = useState(1)

    return (
    <a href="#"><Card maxW='xs' maxH={'md'} style={{height:"430px"}}>
  <CardBody maxH={'md'}>
  <Stack mt='6' spacing='3'>
        <Box style={{  height: "330px" ,display:"flex",flexDirection:"column"}}><Image style={{ width: "245px", height: "450px" }} src={props?.value.image}></Image>
         
        <Heading style={{ marginLeft: "0px" ,marginTop:"2%"}} size='md'>{props?.value.name}</Heading>
       
        <Text color='blue.600' fontSize='2xl'style={{marginTop:"10px"}}>
        {props?.value.price}
      </Text>
              <CardFooter style={{marginRight:"100%"}}>
        
    
     <hr style={{border:"0.2px solid black",width:"284px",marginTop:"-15px",position:"absolute",marginLeft:"-40px"}}></hr>
    
    <ButtonGroup spacing='2' style={{ marginTop: "1%", marginLeft:"-25px"}}>
      
                {count != 10 && <Button onClick={() => {
                    setCount(count + 1)
                }} style={{ backgroundColor: "#abf7b1", borderRadius: "30px" }} >+</Button>}
                {count}

                {count != 0 && <Button onClick={() => {
                    setCount(count - 1)
                }} style={{ backgroundColor: "#ffcbd1", borderRadius: "30px", marginLeft: "3%" }} >-</Button>}
                {count != 0 && <Button variant='ghost' colorScheme='blue' onClick={() => {
                    const cartObj = {
                        quantity:count,
                       ...props?.value
                    }
                  props?.addcart(cartObj)
                }} style={{  marginLeft: "3%" }} >Add to cart</Button>}
            {/* </Box> */}
    </ButtonGroup>

  </CardFooter>

           
        </Box>
        </Stack>
        </CardBody>
        </Card>
        </a>
    )
}