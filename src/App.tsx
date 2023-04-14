import * as React from "react"
import { useState, useEffect } from 'react'
import {
	ChakraProvider,
	Box,
	Text,
	VStack,
	Grid,
	theme,
	GridItem,
} from "@chakra-ui/react"
import { InfoNavbarComponent } from "./Components/infoNavbar"
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Home } from "./Components/home"
import { Services } from "./Components/services"

import "@fontsource/inter"
import { Careers } from "./Components/careers"
import { Contact } from "./Components/contact"

export const App = () => {
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
	return (
	<>
		<ChakraProvider theme={theme}>
		<Grid 
					height="100vh"
					width={"100vw"}
					fontSize="16px" 
					fontFamily={"Inter"}  
					templateRows={"repeat(12,1fr)"}
					background='gray.300'>
					<GridItem rowSpan={1}>
						<InfoNavbarComponent />
					</GridItem>
					<GridItem rowSpan={11}>
						<BrowserRouter>
							<Routes>
								<Route path="/" element={<Home/>} />
								<Route path="/Services" element={<Services/>} />
								<Route path="/Careers" element={<Careers/>} />
								<Route path="/Contact" element={<Contact/>} />
							</Routes>
						</BrowserRouter>
					</GridItem>
				</Grid>
		</ChakraProvider>
	</>)
}
