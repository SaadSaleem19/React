import { background, Box, Image, Text, Button, ChakraProvider, VStack, Input } from "@chakra-ui/react";
import React, { useEffect, useState, } from "react";
import { Count } from "../../Count/index.js"

import '../css/inedx.css'
// import { Side } from "../../../src/Side/sidenav.js"
export function Dashboard() {

    const [data, setData] = useState([
        { id: 1, name: 'Black t-shirt for boys', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYorrs8SbP5OKqfBSQm-Fn7kAv8drAx-s1Q&s", price: "$100" },
        { id: 2, name: 'Sneaker', image: "https://i.ebayimg.com/images/g/YOkAAOSwHuVj9zO5/s-l400.jpg", price: "$150" },
        { id: 3, name: 'Headphone', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWRlGIKlsduqzXxoA4qDalho4xJlQP7SuJA&s", price: "$200" },
        { id: 4, name: 'Cristal watch', image: "https://currenwatches.com.pk/cdn/shop/products/S7d2e9b2df5eb48be959dad1f4655b5e5S_1445x.jpg?v=1713332874", price: " $120" },
        { id: 5, name: 'Nike sneaker', image: "https://cdn.shopify.com/s/files/1/0633/2104/7215/files/aurora_dz0795-100_phslh001-2000.jpg?v=1706056853&width=600", price: "$180" },
        { id: 6, name: 'NY-hat', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevxaIFm3zSxv4g3KXZMcY-Ey4fYcN0ORGwQ&s", price: "$210" },
        { id: 7, name: 'Apple smart watch', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aPEMqWTnAbTR4AlCgcBfyvpSITgAyg7qfg&s", price: "$90" },
        { id: 8, name: 'Band for boys', image: "https://pk-live-21.slatic.net/kf/S5ea0bdca79c84a3084258f144894da64B.jpg", price: "$170" },
        { id: 9, name: 'Shirt', image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/353283/1.jpg?4233", price: "$130" },
        { id: 10, name: 'Headphone', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwegU6gpoGnvcDUVh8AtZURFWcN5pa84Hb1w&s", price: "$160" },
        { id: 11, name: 'Shirt&chain', image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/4361282/1.jpg?5914", price: "$190" },
        { id: 12, name: 'Handsfree', image: "https://i0.wp.com/pcstore.pk/wp-content/uploads/2023/10/Sony-WI-C100-Wireless-In-ear-Headphones-_-Black-Price-in-Pakistan-img1-min.png?fit=1000%2C1000&ssl=1", price: "$140" },
        { id: 13, name: 'Rolex watch', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxGlBwlj2VnVgtrMwf2kaU2dlS7W8LrDOx8TMEWyf2zVFOM2V4nofEphXigrSZ5F1SsA&usqp=CAU", price: "$110" },
        { id: 14, name: 'Begie t-shirt', image: "https://store.taylorswift.com/cdn/shop/products/1-2tvg0Z6Y5ADkbubl6z0h.png?v=1677644319", price: "$220" },
        { id: 15, name: 'NY hat', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2M3OoqtS7Fj3tVM7pOxMgcQYeF6EBP6LwCg&s", price: "$240" }
    ])
    const [searchItems, setSearchItems] = useState([])
    const [cart, setcart] = useState([])
    const [searchText, setsearchText] = useState('')
    //   const [notfound,setnotfound]= useState('Item not found')
    // let length= searchItems.length==0


    function addcart(e) {
        let b = cart.findIndex((val) => {
            return val.id == e.id
        })
        console.log(b)

        if (b != -1) {
            const additem = cart[b]
            e.quantity += additem.quantity
            cart.splice(b, 1, e)
        } else {
            cart.push(e)
        }

        setcart([...cart])
        // console.log(cart)


    }


    useEffect(() => {
        if (searchText) {
            let search = data.filter((value) => {
                return value?.name?.toLowerCase().includes(searchText.toLowerCase())

            })
            setSearchItems([...search])
        }

    }, [searchText])

    // console.log("l",searchText.length)
    // console.log(filter)
    console.log("lenngth", searchItems.length)
    console.log("search", searchText, searchItems);
    return (<Box id="container" style={{ backgroundColor: "#e6e8ea", width: "fit-content", height: "fit-content" }}>



        <Box style={{ backgroundColor: "#d6dbdf", display: "flex", flexDirection: "row", justifyContent: "center", }}  >

            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} gap={70}>
                <Box >
                    <Image src=" https://yshop.org/cdn/shop/t/4/assets/logo-image-file.png?v=73107786777602669321430073421" style={{ width: "100px", height: "100px", }}></Image>
                </Box>
                <Image src="https://cdn3.iconfinder.com/data/icons/miniglyphs/500/014-512.png" style={{ width: "30px", height: "30px", }} gap={"none"}></Image>
                <Button  id="sidenav" onClick="mylink()">
                    <Image  src="https://cdn3.iconfinder.com/data/icons/miniglyphs/500/014-512.png" style={{ width: "30px", height: "30px", }}></Image>
                </Button>
                {function mylink() {
    var x = document.getElementById("myinput");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }}
                <Box  id="myinput"> 
                     <Input id="input"  variant='Outline' style={{ width: "40rem", }} placeholder="Search Item" onChange={(e) => {
                            setsearchText(e.target.value)
                        }} />
                </Box>
                {<Box style={{ display: "flexs" }} ml={"20px"}>
                    <Image style={{ width: "40px", height: "40px", }} src="https://cdn-icons-png.flaticon.com/512/3649/3649552.png"></Image>
                    <Text >{cart.length}</Text>
                </Box>}


            </Box>
        </Box>
        {searchItems.length == 0 && searchText.length != 0 && <Box>  <Text style={{ marginLeft: "23%", marginTop: "30%", fontSize: "70px", color: "red", fontFamily: "sans-serif", "text-shadow": "8px 5px 9px red" }}>item Not found</Text></Box>}

        <div style={{
            gap: 15, display: "flex", flexDirection: "row", flexWrap: "wrap"
            , justifyContent: "center", marginTop: "10px"
        }
        }>

            {searchText == "" ?
                data?.map((val, ind) => {
                    return <ChakraProvider>
                        <Count value={val} addcart={addcart} />
                    </ChakraProvider>
                }) :

                searchItems?.map((val, ind) => {
                    return <ChakraProvider>
                        <Count value={val} addcart={addcart} />
                    </ChakraProvider>
                })

            }

        </div>


    </Box>
    )
}