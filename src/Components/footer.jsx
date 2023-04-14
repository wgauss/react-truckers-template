import React from 'react'
import {useState, useEffect } from 'react'

import '@fontsource/inter'
import '../SCSS/main.scss'
import { 
	Grid,
	GridItem,
	ListItem,
	Text, 
	UnorderedList,
	Button,
	Link, 
	VStack,
	Box} from '@chakra-ui/react'

import { AiOutlineMail} from "react-icons/ai"

import { BsPhone} from 'react-icons/bs'
import { FaFacebookF, FaInstagramSquare, FaPinterestSquare, FaWhatsappSquare} from 'react-icons/fa'

export const Footer = () => {
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
					<Grid
					templateColumns={'repeat(2,1fr)'}
					templateRows={'repeat(2,1fr)'}
					py={8}
					backgroundColor={'gray.400'}>
						<GridItem justifyContent={'center'}>
							<Text textAlign={"left"} fontSize={20} paddingLeft={"25%"}>
								<b>Land of Fire Trucking</b> <br />
								6605 LONGSHORE ST STE 240 <br />
								DUBLIN, OH 43017<br />
								(929) 441-4671<br />
								Monday-Friday: 8AM-6PM (CT)<br />
								Saturday-Sunday: Closed<br />
							</Text>
						</GridItem>
						<GridItem paddingBottom={3} display={"flex"} justifyContent={"center"}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3051.80489699429!2d-83.1098274!3d40.1020627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838935d05ab2f23%3A0x9c971993f29450fc!2s6605%20Longshore%20St%2C%20Dublin%2C%20OH%2043017!5e0!3m2!1sen!2sus!4v1681314058861!5m2!1sen!2sus" width="280" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</GridItem>
						<GridItem justifyContent={'center'}>
							<VStack>
								<Link href='mailto:info@landoffirellc.com'>
									<Button variant='ghost' fontSize={'18px'}><AiOutlineMail />&nbsp; info@landoffirellc.com</Button>
								</Link>
								<Link href='tel:+19294414671'>
									<Button variant='ghost' fontSize={'18px'}><BsPhone/>&nbsp;(929)441-4671</Button>
								</Link>
								<Grid
									templateColumns={'repeat(2,1fr)'}
									templateRows={'repeat(2,1fr)'}
									gap={4}
									width={150}
									justifyItems={'center'}
									alignItems={'center'}
									>
									<GridItem>
										<Link href='https://www.facebook.com/people/Landoffirelogistics/100090148963198/?mibextid=LQQJ4d'>
											<FaFacebookF size={50} />
										</Link>
									</GridItem>
									<GridItem>
										<Link href='https://www.instagram.com/landoffirelogistics/'>
											<FaInstagramSquare size={50} />
										</Link>
									</GridItem>
									<GridItem>
										<Link href='https://wa.me/19294414671'>
											<FaWhatsappSquare size={50} />
										</Link>	
									</GridItem>
									<GridItem >
										<Link href='https://www.pinterest.com'>
											<FaPinterestSquare size={50} />
										</Link>
									</GridItem>
								</Grid>
							</VStack>
						</GridItem>
						<GridItem>
							<Grid gap={2}
							justifyContent={'center'}
							fontSize={20}>
								<GridItem>
									<Text fontSize={28}>
										Pages
										<hr/>
									</Text>
								</GridItem>
								<GridItem>
									<Link href={"/"}>
										Home
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Services"}>
										Services
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Careers"}>
										Careers
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Contact"}>
										Contact
									</Link>
								</GridItem>
								
							</Grid>
						</GridItem>
					</Grid>
				</>
				: <></>}
				{showTablet ? 
				<>
					<Grid
					templateColumns={'repeat(2,1fr)'}
					templateRows={'repeat(2,1fr)'}
					py={6}
					px={2}
					backgroundColor={'gray.400'}>
						<GridItem justifyContent={'center'}>
							<Text textAlign={"left"} fontSize={16} paddingLeft={"25%"}>
								<b>Land of Fire Trucking</b> <br />
								6605 LONGSHORE ST STE 240 <br />
								DUBLIN, OH 43017<br />
								(929) 441-4671<br />
								Monday-Friday: 8AM-6PM (CT)<br />
								Saturday-Sunday: Closed<br />
							</Text>
						</GridItem>
						<GridItem paddingBottom={3}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3051.80489699429!2d-83.1098274!3d40.1020627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838935d05ab2f23%3A0x9c971993f29450fc!2s6605%20Longshore%20St%2C%20Dublin%2C%20OH%2043017!5e0!3m2!1sen!2sus!4v1681314058861!5m2!1sen!2sus" width="280" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</GridItem>
						<GridItem justifyContent={'center'}>
							<VStack>
								<Link href='mailto:info@landoffirellc.com'>
									<Button variant='ghost' fontSize={'18px'}><AiOutlineMail />&nbsp; info@landoffirellc.com</Button>
								</Link>
								<Link href='tel:+19294414671'>
									<Button variant='ghost' fontSize={'18px'}><BsPhone/>&nbsp;(929)441-4671</Button>
								</Link>
								<Grid
									templateColumns={'repeat(2,1fr)'}
									templateRows={'repeat(2,1fr)'}
									gap={4}
									width={150}
									justifyItems={'center'}
									alignItems={'center'}
									>
									<GridItem>
										<Link href='https://www.facebook.com/people/Landoffirelogistics/100090148963198/?mibextid=LQQJ4d'>
											<FaFacebookF size={32} />
										</Link>
									</GridItem>
									<GridItem>
										<Link href='https://www.instagram.com/landoffirelogistics/'>
											<FaInstagramSquare size={32} />
										</Link>
									</GridItem>
									<GridItem>
										<Link href='https://wa.me/19294414671'>
											<FaWhatsappSquare size={32} />
										</Link>	
									</GridItem>
									<GridItem >
										<Link href='https://www.pinterest.com'>
											<FaPinterestSquare size={32} />
										</Link>
									</GridItem>
								</Grid>
							</VStack>
						</GridItem>
						<GridItem>
							<Grid gap={2}
							justifyContent={'center'}
							fontSize={20}>
								<GridItem>
									<Text fontSize={28}>
										Pages
										<hr/>
									</Text>
								</GridItem>
								<GridItem>
									<Link href={"/"}>
										Home
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Services"}>
										Services
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Careers"}>
										Careers
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Contact"}>
										Contact
									</Link>
								</GridItem>
								
							</Grid>
						</GridItem>
					</Grid>
				</>
				:<></>}
				{showMobile ?
				<>
					<Grid
					templateColumns={'repeat(2,1fr)'}
					templateRows={'repeat(2,1fr)'}
					py={6}
					px={2}
					backgroundColor={'gray.400'}>
						<GridItem justifyContent={'center'}>
							<Text textAlign={"left"} fontSize={14} paddingLeft={"25%"}>
								<b>Land of Fire Trucking</b> <br />
								6605 LONGSHORE ST STE 240 <br />
								DUBLIN, OH 43017<br />
								(929) 441-4671<br />
								Monday-Friday: 8AM-6PM (CT)<br />
								Saturday-Sunday: Closed<br />
							</Text>
						</GridItem>
						<GridItem>
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3051.80489699429!2d-83.1098274!3d40.1020627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838935d05ab2f23%3A0x9c971993f29450fc!2s6605%20Longshore%20St%2C%20Dublin%2C%20OH%2043017!5e0!3m2!1sen!2sus!4v1681314058861!5m2!1sen!2sus" width="140" height="140" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</GridItem>
						<GridItem justifyContent={'center'}>
							<VStack>
								<Link href='mailto:info@landoffirellc.com'>
									<Button variant='ghost' fontSize={'14px'}><AiOutlineMail />&nbsp; info@landoffirellc.com</Button>
								</Link>
								<Link href='tel:+19294414671'>
									<Button variant='ghost' fontSize={'14px'}><BsPhone/>&nbsp;(929)441-4671</Button>
								</Link>
								<Grid
									templateColumns={'repeat(2,1fr)'}
									templateRows={'repeat(2,1fr)'}
									gap={4}
									width={150}
									justifyItems={'center'}
									alignItems={'center'}
									>
									<GridItem>
										<Link href='https://www.facebook.com/people/Landoffirelogistics/100090148963198/?mibextid=LQQJ4d'>
											<FaFacebookF size={26} />
										</Link>
									</GridItem>
									<GridItem>
										<Link href='https://www.instagram.com/landoffirelogistics/'>
											<FaInstagramSquare size={26} />
										</Link>
									</GridItem>
									<GridItem>
										<Link href='https://wa.me/19294414671'>
											<FaWhatsappSquare size={26} />
										</Link>	
									</GridItem>
									<GridItem >
										<Link href='https://www.pinterest.com'>
											<FaPinterestSquare size={26} />
										</Link>
									</GridItem>
								</Grid>
							</VStack>
						</GridItem>
						<GridItem>
							<Grid gap={2}
							justifyContent={'center'}>
								<GridItem>
									<Text fontSize={24}>
										Pages
										<hr/>
									</Text>
								</GridItem>
								<GridItem>
									<Link href={"/"}>
										Home
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Services"}>
										Services
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Careers"}>
										Careers
									</Link>
								</GridItem>
								<GridItem>
									<Link href={"/Contact"}>
										Contact
									</Link>
								</GridItem>
								
							</Grid>
						</GridItem>
					</Grid>
				</>
				:<></>}
			</>
		)
}