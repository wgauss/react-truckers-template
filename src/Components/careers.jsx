import * as React from 'react' 
import { useState, useEffect } from 'react'

import { Box, Flex, List, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { Apply } from './apply'
import { Footer } from './footer'

export const Careers = () => {
	const [showDesktop, setDesktop] = useState(false)
	const [showTablet, setTablet] = useState(false)
	const [showMobile, setMobile] = useState(false)

	let updateDimensions = () => {
		if (window.innerWidth > 1100) {
			setDesktop(true)
			setMobile(false)
			setTablet(false)
		} else if (window.innerWidth > 700) {
			setTablet(true)
			setDesktop(false)
			setMobile(false)

		} else if (window.innerWidth < 700) {
			setMobile(true)
			setTablet(false)
			setDesktop(false)
		}
		console.log(window.innerWidth + " " + window.innerHeight)
	} 
	useEffect(() => {
			updateDimensions()
			window.addEventListener("resize", updateDimensions)
		}, [])
	return(
			<>
				{showDesktop ? 
				<>
					<Box width={"100vw"} bgGradient={"linear-gradient(128deg, rgba(255,0,0,1) 0%, rgba(255,142,48,1) 52%, rgba(255,67,0,1) 100%)"} p={3}>
						<Flex justifyContent={"center"}><Apply/></Flex> 
						<VStack marginY={3} bg={"gray.200"} borderRadius={6} border={"1px"}>
							<Text fontSize={48} textAlign={"center"}>Positions Available</Text>
							<img src={require("../Images/hiringPromo1.jpg")}/>
							<Apply/>
							<img src={require("../Images/hiringPromo2.jpg")}/>
						</VStack>
						<Flex justifyContent={"center"}><Apply/></Flex>
					</Box>
				</>
				: <></>}
				{showTablet ? 
				<>
					<Box width={"100vw"} bgGradient={"linear-gradient(128deg, rgba(255,0,0,1) 0%, rgba(255,142,48,1) 52%, rgba(255,67,0,1) 100%)"} p={3}>
						<Flex justifyContent={"center"}><Apply/></Flex> 
						<VStack marginY={3} bg={"gray.200"} borderRadius={6} border={"1px"}>
							<Text fontSize={48} textAlign={"center"}>Positions Available</Text>
							<img src={require("../Images/hiringPromo1.jpg")}/>
							<Apply/>
							<img src={require("../Images/hiringPromo2.jpg")}/>
						</VStack>
						<Flex justifyContent={"center"}><Apply/></Flex>
					</Box>
				</>
				:<></>}
				{showMobile ?
				<>
					<Box width={"100vw"} bgGradient={"linear-gradient(128deg, rgba(255,0,0,1) 0%, rgba(255,142,48,1) 52%, rgba(255,67,0,1) 100%)"} p={3}>
						<Flex justifyContent={"center"}><Apply/></Flex> 
						<VStack marginY={3} bg={"gray.200"} borderRadius={6} border={"1px"}>
							<Text fontSize={48} textAlign={"center"}>Positions Available</Text>
							<img src={require("../Images/hiringPromo1.jpg")}/>
							<Apply/>
							<img src={require("../Images/hiringPromo2.jpg")}/>
						</VStack>
						<Flex justifyContent={"center"}><Apply/></Flex>
					</Box>
				</>
				:<></>}
					<Footer/>

			</>
		)
}