import * as React from 'react' 
import { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { HStack, Text, Box} from '@chakra-ui/layout'

export const Review = (props) => {
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
	
	let ratingFunc = (ratingPassed) =>{
		switch(ratingPassed){
			case(5):
				return(
				<>
					<HStack justifyContent={'center'}>
						<AiFillStar size={24}/>
						<AiFillStar size={24}/>
						<AiFillStar size={24}/>
						<AiFillStar size={24}/>
						<AiFillStar size={24}/>
					</HStack>
				</>)
				break;
				case(4):
				return(
				<>
					<HStack justifyContent={'center'}>
						<AiFillStar size={24}/>
						<AiFillStar size={24}/>
						<AiFillStar size={24}/>
						<AiFillStar size={24}/>
					</HStack>
				</>)
				break;
		}
	}
	return(
			<>
				{showDesktop ? 
				<>
					<Box border={'1px'} mb={3} background={'gray.100'} marginLeft={3} marginRight={3} borderRadius={4}>
						<Text fontWeight={'bold'} fontSize={26}>{props.companyName} ({props.date})</Text>
						<Text fontSize={20}> <b>&ldquo;</b> <i>{props.comment}</i> <b>&rdquo;</b> </Text>
						{ratingFunc(props.rating)}
					</Box>
				</>
				: <></>}
				{showTablet ? 
				<>
					<Box border={'1px'} mb={3} background={'gray.100'} marginLeft={3} marginRight={3} borderRadius={4}>
						<Text fontWeight={'bold'}>{props.companyName} ({props.date})</Text>
						<Text> <b>&ldquo;</b> <i>{props.comment}</i> <b>&rdquo;</b> </Text>
						{ratingFunc(props.rating)}
					</Box>
				</>
				:<></>}
				{showMobile ?
				<>
					<Box border={'1px'} mb={3} background={'gray.100'} marginLeft={3} marginRight={3} borderRadius={4}>
						<Text fontWeight={'bold'}>{props.companyName} ({props.date})</Text>
						<Text> <b>&ldquo;</b> <i>{props.comment}</i> <b>&rdquo;</b> </Text>
						{ratingFunc(props.rating)}
					</Box>
				</>
				:<></>}
			</>
		)
}