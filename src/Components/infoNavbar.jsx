import * as React from 'react'
import { useState, useEffect } from 'react'

import {
	ChakraProvider,
	Box,
	Text,
	HStack,
	VStack,
	Grid,
	Button,
	theme,
	Link,
	Flex,
	GridItem,
} from "@chakra-ui/react"


import "@fontsource/inter"
import "../SCSS/main.scss"

import { AiOutlineMail, AiFillYoutube } from "react-icons/ai"
import { BsPhone} from 'react-icons/bs'
import { FaFacebookF, FaInstagramSquare, FaPinterestSquare} from 'react-icons/fa'


export const InfoNavbarComponent = () => {
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
					<Box width='100vw'>
						<Link href='/'>
							<HStack width='100vw' justifyContent={'space-between'} id={"header"}>
								<Box textAlign={'center'}
								bgGradient={"linear(240deg, rgba(255,0,0,1) 0%, rgba(255,142,48,1) 34%, rgba(255,227,88,1) 53%, rgba(255,234,112,1) 61%, rgba(255,67,0,1) 100%)"} pt={2}>
								<img src={require("../Images/logoNBG.png")} id="logoTitleDesk" />
									<Link href='mailto:info@landoffiretrucking.com'>
										<Button variant='ghost' fontSize={'20px'}><AiOutlineMail />&nbsp; info@landoffiretrucking.com</Button>
									</Link>

									<Link href='tel:+19294414671'>
										<Button variant='ghost' fontSize={'20px'}><BsPhone/>&nbsp;(929)441-4671</Button>
									</Link>
								</Box>
							</HStack>
						</Link>
						<HStack 
						justifyContent={"space-evenly"}
						width='100vw'
						color={"#ff4300"}
						backgroundColor={'gray.700'}
						fontWeight="extrabold"
						border={"1px"}
						borderRadius={3}
						fontSize={26}>
								<Link href="/" className={"navBarDesk"} >
									Home
								</Link>
								<Link href='/Services' textDecoration={"none"} className={"navBarDesk"}>
									Services
								</Link>
								<Link href="/Careers" className={"navBarDesk"}>
									Careers
								</Link>
								<Link href="/Contact" className={"navBarDesk"}>
									Contact
								</Link>
						</HStack>
						
					</Box>
				</>
				: <></>}
				{showTablet ? 
				<>
					<Box width='100vw'>
						<Link href='/'>
							<HStack width='100vw' justifyContent={'space-between'} id={"header"}>
								<Box textAlign={'center'}
								bgGradient={"linear(240deg, rgba(255,0,0,1) 0%, rgba(255,142,48,1) 34%, rgba(255,227,88,1) 53%, rgba(255,234,112,1) 61%, rgba(255,67,0,1) 100%)"} pt={2}>
								<img src={require("../Images/logoNBG.png")} id="logoTitleTab" />
									<Link href='mailto:info@landoffiretrucking.com'>
										<Button variant='ghost' fontSize={'20px'}><AiOutlineMail />&nbsp; info@landoffiretrucking.com</Button>
									</Link>

									<Link href='tel:+19294414671'>
										<Button variant='ghost' fontSize={'20px'}><BsPhone/>&nbsp;(929)441-4671</Button>
									</Link>
								</Box>
							</HStack>
						</Link>
						<HStack 
						justifyContent={"space-evenly"}
						width='100vw'
						color={"#ff4300"}
						backgroundColor={'gray.700'}
						fontWeight="extrabold"
						border={"1px"}
						borderRadius={3}
						fontSize={20}>
								<Link href="/" className={"navBar"} >
									Home
								</Link>
								<Link href='/Services' textDecoration={"none"} className={"navBar"}>
									Services
								</Link>
								<Link href="/Careers" className={"navBar"}>
									Careers
								</Link>
								<Link href="/Contact" className={"navBarTab"}>
									Contact
								</Link>
						</HStack>
						
					</Box>
				</>
				:<></>}
				{showMobile ?
				<>
					<Box width='100vw'>
						<Link href='/'>
							<HStack width='100vw' justifyContent={'space-between'} id={"header"}>
								<Box textAlign={'center'}
								bgGradient={"linear(240deg, rgba(255,0,0,1) 0%, rgba(255,142,48,1) 34%, rgba(255,227,88,1) 53%, rgba(255,234,112,1) 61%, rgba(255,67,0,1) 100%)"} pt={2}>
								<img src={require("../Images/logoNBG.png")} id="logoTitlePhone" />
									<Link href='mailto:info@landoffiretrucking.com'>
										<Button variant='ghost' fontSize={'14px'}><AiOutlineMail />&nbsp; info@landoffiretrucking.com</Button>
									</Link>

									<Link href='tel:+19294414671'>
										<Button variant='ghost' fontSize={'14px'}><BsPhone/>&nbsp;(929)441-4671</Button>
									</Link>
								</Box>
							</HStack>
						</Link>
						<HStack 
						justifyContent={"space-evenly"}
						width='100vw'
						color={"#ff4300"}
						backgroundColor={'gray.700'}
						fontWeight="extrabold"
						border={"1px"}
						borderRadius={3}
						fontSize={20}>
								<Link href="/" className={"navBar"} >
									Home
								</Link>
								<Link href='/Services' textDecoration={"none"} className={"navBar"}>
									Services
								</Link>
								<Link href="/Careers" className={"navBar"}>
									Careers
								</Link>
								<Link href="/Contact" className={"navBar"}>
									Contact
								</Link>
						</HStack>
						
					</Box>
				</>
				:<></>}
	</>
	)
}