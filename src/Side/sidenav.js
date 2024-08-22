// import { background, Box, Image, Text, Button, ChakraProvider, VStack, Input } from "@chakra-ui/react";
// import React, { useEffect, useState, } from "react";
// import { Count } from "../../Count/index";
// import {
//     Drawer,
//     DrawerBody,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//     useDisclosure
//   } from '@chakra-ui/react'

// export function Side() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const btnRef = React.useRef()
   
       
      
//         return (
//           <>
//             <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
//               Open
//             </Button>
//             <Drawer
//               isOpen={isOpen}
//               placement='right'
//               onClose={onClose}
//               finalFocusRef={btnRef}
//             >
//               <DrawerOverlay />
//               <DrawerContent>
//                 <DrawerCloseButton />
//                 <DrawerHeader>Create your account</DrawerHeader>
      
//                 <DrawerBody>
//                   <Input placeholder='Type here...' />
//                 </DrawerBody>
      
//                 <DrawerFooter>
//                   <Button variant='outline' mr={3} onClick={onClose}>
//                     Cancel
//                   </Button>
//                   <Button colorScheme='blue'>Save</Button>
//                 </DrawerFooter>
//               </DrawerContent>
//             </Drawer>
//           </>
//         )
//       }



