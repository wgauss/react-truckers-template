import * as React from 'react' 
import { useState, useEffect } from 'react'

import { Grid, GridItem, HStack, Text, Box, Link} from '@chakra-ui/layout'

import "@fontsource/inter"
import "../SCSS/main.scss"
import "../SCSS/home.scss"
import { Footer } from './footer'
import { Button } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { Apply } from './apply'
import { Review } from './reviews'
/* 
import * as React from 'react' 
import { useState, useEffect } from 'react'

export const  = () => {
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
					Put Desktop Shit Here
				</>
				: <></>}
				{showTablet ? 
				<>
					Put Tablet shit in here
				</>
				:<></>}
				{showMobile ?
				<>
					Put Mobile Shit here
				</>
				:<></>}
			</>
		)
}





set of images / 10 seconds per images
						scale image with random center point
						list of images which should be loaded
*/

export const Home = () => {
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
	return (<>
		{showDesktop ? 
		<>
			<Grid textAlign={'center'}>
				<GridItem background={"gray.300"}>
					<Text fontSize={46} fontWeight={'bold'}>Our Mission | Our Vision</Text>
					<img src={require("../Images/road_distance_1600x900.jpg")} className='ImageDesk'/>
					<Text fontSize={26}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<Box m={3}>
						<Apply/> <Link href="/Contact"><Button>Shipper?</Button></Link>
					</Box>
					<hr/>
				</GridItem>
				<GridItem background={'#ff4300'}>
					<Text fontSize={46} fontWeight={'bold'}>Who are we?</Text>
					<img src={require("../Images/truckerNig.jpg")} className='ImageDesk'/>
					<Text fontSize={26}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<hr/>
				</GridItem>
				<GridItem background={"gray.300"}>
					<Text fontSize={46} fontWeight={'bold'} >The Difference We Make as a Trusted Company</Text>
					<img src={require("../Images/LOFT-promo1.jpg")} className='ImageDesk'/>
					<Text fontSize={26}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<hr/>
				</GridItem>
				<GridItem background={'#ff4300'}>
					<Text fontSize={32} fontWeight={'bold'}>Testimonials/Reviews</Text>
					<HStack justifyContent={'center'} mb={3}>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
					</HStack>
					<Review companyName={"Industry LLC"} comment={"Hire them!"} rating={5} date={"Oct 2023"}/>
					<Review companyName={"Feel Good Inc."} comment={"We got our frieght in a timely and professional manner"} rating={5} date={"Feb 2022"}/>
					<Review companyName={"Shell Inc."} comment={"We love Land of Fire Trucking!"} rating={5} date={"Dec 2019"}/>

				</GridItem>
			</Grid>
		</>
		: <></>}	 
		{showTablet ? 
		<>
			<Grid textAlign={'center'}>
				<GridItem background={"gray.300"}>
					<Text fontSize={32} fontWeight={'bold'}>Our Mission | Our Vision</Text>
					<img src={require("../Images/road_distance_1600x900.jpg")} className='ImageTab'/>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<Box m={3}>
						<Apply/> <Link href="/Contact"><Button>Shipper?</Button></Link>
					</Box>
					<hr/>
				</GridItem>
				<GridItem background={'#ff4300'}>
					<Text fontSize={32} fontWeight={'bold'}>Who are we?</Text>
					<img src={require("../Images/truckerNig.jpg")} className='ImageTab'/>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<hr/>
				</GridItem>
				<GridItem background={"gray.300"}>
					<Text fontSize={32} fontWeight={'bold'} >The Difference We Make as a Trusted Company</Text>
					<img src={require("../Images/LOFT-promo1.jpg")} className='ImageTab'/>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<hr/>
				</GridItem>
				<GridItem background={'#ff4300'}>
					<Text fontSize={32} fontWeight={'bold'}>Testimonials/Reviews</Text>
					<HStack justifyContent={'center'} mb={3}>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
					</HStack>
					<Review companyName={"Industry LLC"} comment={"Hire them!"} rating={5} date={"Oct 2023"}/>
					<Review companyName={"Feel Good Inc."} comment={"We got our frieght in a timely and professional manner"} rating={5} date={"Feb 2022"}/>
					<Review companyName={"Shell Inc."} comment={"We love Land of Fire Trucking!"} rating={5} date={"Dec 2019"}/>

				</GridItem>
			</Grid>
		</>
		:<></>}
		{showMobile ?
		<>
			<Grid textAlign={'center'}>
				<GridItem background={"gray.300"}>
					<Text fontSize={32} fontWeight={'bold'}>Our Mission | Our Vision</Text>
					<img src={require("../Images/road_distance_1600x900.jpg")} className='ImagePhone'/>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<Box m={3}>
						<Apply/> <Link href="/Contact"><Button>Shipper?</Button></Link>
					</Box>
					<hr/>
				</GridItem>
				<GridItem background={'#ff4300'}>
					<Text fontSize={32} fontWeight={'bold'}>Who are we?</Text>
					<img src={require("../Images/truckerNig.jpg")} className='ImagePhone'/>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<hr/>
				</GridItem>
				<GridItem background={"gray.300"}>
					<Text fontSize={32} fontWeight={'bold'} >The Difference We Make as a Trusted Company</Text>
					<img src={require("../Images/LOFT-promo1.jpg")} className='ImagePhone'/>
					<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
					<hr/>
				</GridItem>
				<GridItem background={'#ff4300'}>
					<Text fontSize={32} fontWeight={'bold'}>Testimonials/Reviews</Text>
					<HStack justifyContent={'center'} mb={3}>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
						<AiFillStar size={32}/>
					</HStack>
					<Review companyName={"Industry LLC"} comment={"Hire them!"} rating={5} date={"Oct 2023"}/>
					<Review companyName={"Feel Good Inc."} comment={"We got our frieght in a timely and professional manner"} rating={5} date={"Feb 2022"}/>
					<Review companyName={"Shell Inc."} comment={"We love Land of Fire Trucking!"} rating={5} date={"Dec 2019"}/>

				</GridItem>
			</Grid>
		</>
		:<></>}
		<Footer/>
	</>)
			
}