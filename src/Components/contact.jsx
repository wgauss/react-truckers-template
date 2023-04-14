import * as React from 'react' 
import { useState, useEffect } from 'react'

import { 
	Box, 
	Input,
	InputLeftElement,
	Text, 
	Button, 
	useToast,
	Flex,
	Badge,
	InputGroup,
	Grid,
	GridItem,
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionIcon,
	AccordionPanel,
	Checkbox,
	Divider,
	Textarea,
	CheckboxGroup} from '@chakra-ui/react'

import { RiMailFill } from "react-icons/ri"

import { FaUser, FaPhone, FaHome, FaSearchLocation } from "react-icons/fa"

import { GiModernCity } from "react-icons/gi"

import { GrContactInfo } from "react-icons/gr"

import "../SCSS/contact.scss"
import { Footer } from './footer'

import emailjs from "emailjs-com"

export const Contact = () => {
	const [showDesktop, setDesktop] = useState(false)
	const [showTablet, setTablet] = useState(false)
	const [showMobile, setMobile] = useState(false)
	const [loadingThing, setLoadingThing] = useState(false)
	const [backgroundColor, setBackgroundColor] = useState("#78B2E0");
	
	const toast = useToast()

	const [custName, setCustName] = useState("")
	const [custPhoneNum, setCustPhoneNum] = useState("")
	const [custEmail, setCustEmail] = useState("")
	const [custAddress, setCustAddress] = useState("")
	const [custCity, setCustCity] = useState("")
	const [custZip, setCustZip] = useState("")
	const [custMessage, setCustMessage] = useState("")
	const [custAvailabilityWeekDays, setCustAvailabilityWeekDays] = useState("")
	const [custAvailabilityWeekENDS, setCustAvailabilityWeekENDS] = useState("")


	//true is false, false is true in the intuitive sense. but for some reason the UI just works starting at a false positive
	const [weekDayState, setWeekDayState] = useState(true)
	const [weekDayID, setWeekDayID] = useState("weekDayButton")

	const [weekEndState, setWeekEndState] = useState(true)
	const [weekEndID, setWeekEndID] = useState("weekEndButton")

	const [SundayState, setSundayState] = useState(true)
	const [SundayID, setSundayID] = useState("SundayButton")

	const [MondayState, setMondayState] = useState(true)
	const [MondayID, setMondayID] = useState("MondayButton")

	const [TuesdayState, setTuesdayState] = useState(true)
	const [TuesdayID, setTuesdayID] = useState("TuesdayButton")

	const [WednesdayState, setWednesdayState] = useState(true)
	const [WednesdayID, setWednesdayID] = useState("WednesdayButton")

	const [ThursdayState, setThursdayState] = useState(true)
	const [ThursdayID, setThursdayID] = useState("ThursdayButton")

	const [FridayState, setFridayState] = useState(true)
	const [FridayID, setFridayID] = useState("FridayButton")

	const [SaturdayState, setSaturdayState] = useState(true)
	const [SaturdayID, setSaturdayID] = useState("SaturdayButton")

	const [buttonSubmitQM, setButtonSubmitQM] = useState(false)

	const [mornings, setMornings] = useState(false)
	const [afternoons, setAfternoons] = useState(false)
	const [evenings, setEvenings] = useState(false)

	let changeMornings = () => {
		setMornings(!mornings)
		console.log(mornings)
	}
	let changeAfternoons = () => {
		setAfternoons(!afternoons)
		console.log(afternoons)
	}
	let changeEvenings = () => {
		setEvenings(!evenings)
		console.log(evenings)
	}

	let finalCheck = () => {
		if (weekDayState) {
			setCustAvailabilityWeekDays("Anytime on the Weekdays (Mon-Fri)")
		} else {
			if (MondayState == true && TuesdayState == true && WednesdayState == true && ThursdayState == true && FridayState == true) {
				setCustAvailabilityWeekDays("Not Available on the Weekdays(Mon-Fri)")
			} else {
				setCustAvailabilityWeekDays("Available on ")
				if (MondayState == false) {
					setCustAvailabilityWeekDays(custAvailabilityWeekDays + "Mondays | ")
				}
				if (TuesdayState == false) {
					setCustAvailabilityWeekDays(custAvailabilityWeekDays + "Tuesdays | ")
				}
				if (WednesdayState == false) {
					setCustAvailabilityWeekDays(custAvailabilityWeekDays + "Wednesdays | ")
				}
				if (ThursdayState == false) {
					setCustAvailabilityWeekDays(custAvailabilityWeekDays + "Thursdays | ")
				}
				if (FridayState == false) {
					setCustAvailabilityWeekDays(custAvailabilityWeekDays + "Fridays | ")
				}
			}
		}
		if (weekEndState) {
			setCustAvailabilityWeekENDS("Anytime on the Weekends(Sat-Sun)")
		} else {
			if (SundayState == true && SaturdayState == true) {
				setCustAvailabilityWeekENDS("Not Available on the Weekends(Sat-Sun)")
			} else {
				if (SundayState == false) {
					setCustAvailabilityWeekENDS("Available on Sundays")
				}
				if (SaturdayState == false) {
					setCustAvailabilityWeekENDS("Available on Saturdays")
				}
			}
		}

		if (mornings) {
			setMornings("Morning (8AM-10AM)")
		} else {
			setMornings("NOT Available in the Morning (8AM-10AM)")
		}
		if (evenings) {
			setEvenings("Evening (10AM-12PM)")
		} else {
			setEvenings("NOT Available in the Evening (10AM-12PM)")
		}
		if (afternoons) {
			setAfternoons("Afternoon (12PM-5PM)")
		} else {
			setAfternoons("NOT Available in the Afternoon (12PM-5PM)")
		}
	}

	let changeName = (value) => {
		setCustName(value);
	}
	let changePhoneNum = (value) => {
		//do some fuck shit 
		// (xxx)xxx-xxx
		//(2 _ _) _ _ _ - _ _ _ _
		setCustPhoneNum(value);
	}
	let changeEmail = (value) => {
		setCustEmail(value);
	}
	let changeAddress = (value) => {
		setCustAddress(value);
	}
	let changeCity = (value) => {
		setCustCity(value);
	}
	let changeZip = (value) => {
		setCustZip(value);
	}
	let changeMessage = (value) => {
		setCustMessage(value)
	}

	let changeWeekdayButtonState = () => {
		setWeekDayState(!weekDayState);
		console.log(weekDayState)
		if (weekDayState) {
			setWeekDayID("weekDayButtonACTIVE")
			setMondayState(false)
			setTuesdayState(false)
			setWednesdayState(false)
			setThursdayState(false)
			setFridayState(false)
			setMondayID("MondayButtonACTIVE")
			setTuesdayID("TuesdayButtonACTIVE")
			setWednesdayID("WednesdayButtonACTIVE")
			setThursdayID("ThursdayButtonACTIVE")
			setFridayID("FridayButtonACTIVE")

		} else {
			setWeekDayID("weekDayButton")
			setMondayState(true)
			setTuesdayState(true)
			setWednesdayState(true)
			setThursdayState(true)
			setFridayState(true)
			setMondayID("MondayButton")
			setTuesdayID("TuesdayButton")
			setWednesdayID("WednesdayButton")
			setThursdayID("ThursdayButton")
			setFridayID("FridayButton")
		}
		console.log(weekDayID)
	}
	let changeWeekEndButtonState = () => {
		setWeekEndState(!weekEndState);
		console.log(weekEndState)
		if (weekEndState) {
			setWeekEndID("weekEndButtonACTIVE")
			setSundayState(false)
			setSaturdayState(false)
			setSundayID("SundayButtonACTIVE")
			setSaturdayID("SaturdayButtonACTIVE")

		} else {
			setWeekEndID("weekEndButton")
			setSundayState(true)
			setSaturdayState(true)
			setSundayID("SundayButton")
			setSaturdayID("SaturdayButton")

		}
		console.log(weekDayID)
	}
	let changeSundayButtonState = () => {
		setSundayState(!SundayState);
		if (SundayState) {
			setSundayID("SundayButtonACTIVE")
			if (SaturdayState == false) {
				setWeekEndState(false)
				setWeekEndID("weekEndButtonACTIVE")
			}
		} else {
			setSundayID("SundayButton")
			setWeekEndState(true)
			setWeekEndID("weekEndButton")
		}
	}
	let changeMondayButtonState = () => {
		setMondayState(!MondayState);
		if (MondayState) {
			setMondayID("MondayButtonACTIVE")
			if (TuesdayState == false && WednesdayState == false && ThursdayState == false && FridayState == false) {
				setWeekDayState(false)
				setWeekDayID("weekDayButtonACTIVE")
			}
		} else {
			setMondayID("MondayButton")
			setWeekDayState(false)
			setWeekDayID("weekDayButton")
		}
	}
	let changeTuesdayButtonState = () => {
		setTuesdayState(!TuesdayState);
		if (TuesdayState) {
			setTuesdayID("TuesdayButtonACTIVE")
			if (MondayState == false && WednesdayState == false && ThursdayState == false && FridayState == false) {
				setWeekDayState(false)
				setWeekDayID("weekDayButtonACTIVE")
			}
		} else {
			setTuesdayID("TuesdayButton")
			setWeekDayState(false)
			setWeekDayID("weekDayButton")
		}
	}
	let changeWednesdayButtonState = () => {
		setWednesdayState(!WednesdayState);
		if (WednesdayState) {
			setWednesdayID("WednesdayButtonACTIVE")
			if (MondayState == false && TuesdayState == false && ThursdayState == false && FridayState == false) {
				setWeekDayState(false)
				setWeekDayID("weekDayButtonACTIVE")
			}
		} else {
			setWednesdayID("WednesdayButton")
			setWeekDayState(false)
			setWeekDayID("weekDayButton")
		}
	}
	let changeThursdayButtonState = () => {
		setThursdayState(!ThursdayState);
		if (ThursdayState) {
			setThursdayID("ThursdayButtonACTIVE")
			if (MondayState == false && TuesdayState == false && WednesdayState == false && FridayState == false) {
				setWeekDayState(false)
				setWeekDayID("weekDayButtonACTIVE")
			}
		} else {
			setThursdayID("ThursdayButton")
			setWeekDayState(false)
			setWeekDayID("weekDayButton")
		}
	}

	let changeFridayButtonState = () => {
		setFridayState(!FridayState);
		if (FridayState) {
			setFridayID("FridayButtonACTIVE")
			if (MondayState == false && TuesdayState == false && WednesdayState == false && ThursdayState == false) {
				setWeekDayState(false)
				setWeekDayID("weekDayButtonACTIVE")
			}
		} else {
			setFridayID("FridayButton")
			setWeekDayState(false)
			setWeekDayID("weekDayButton")
		}
	}
	let changeSaturdayButtonState = () => {
		setSaturdayState(!SaturdayState);
		if (SaturdayState) {
			setSaturdayID("SaturdayButtonACTIVE")
			if (SundayState == false) {
				setWeekEndState(false)
				setWeekEndID("weekEndButtonACTIVE")
			}
		} else {
			setSaturdayID("SaturdayButton")
			setWeekEndState(true)
			setWeekEndID("weekEndButton")
		}
	}


	function handleSubmit(e){
		setLoadingThing(true)
		if (custName.length > 0 && custPhoneNum.length > 0 && custAddress.length > 0 && custCity.length > 0 && custZip.length > 0 && custMessage.length > 0) {
			e.preventDefault();
			var templateParams = {
				from_name: custName,
				simpmessage: custMessage,
				phone: custPhoneNum,
				zipcode: custZip + " ",
				city: custCity + " ",
				address: custAddress + " ",
				reply_to: custEmail,
				availweekdays: custAvailabilityWeekDays,
				availweekends: custAvailabilityWeekENDS,
				morning: mornings,
				evening: evenings,
				afternoon: afternoons
			}
			emailjs.send("service_752e8y1", "template_3ha9r5k", templateParams, "IRSqXt1N73Umfih4a")
				.then((result) => {
					setTimeout(() => {
						setCustName("")
						setCustPhoneNum("")
						setCustEmail("")
						setCustAddress("")
						setCustCity("")
						setCustZip("")
						setCustMessage("")
						setCustAvailabilityWeekDays("")
						setCustAvailabilityWeekENDS("")
						setMornings(false)
						setAfternoons(false)
						setEvenings(false)
						setLoadingThing(false)
						
						toast({
						title: 'Inquiry Submitted Successfully!',
						description: "We'll contact you as soon as possible, have a great day!",
						status: 'success',
						duration: 9000,
						isClosable: true,
						})
					}, 1000)
				}, (error) => {
					toast({
						title: `Inquiry Not Sent, Please Try Again Later... (if error keeps occuring please contact us directly @ info@landoffiretrucking.com)`,
						status: "error",
						isClosable: true,
					})
				})
		} else {
			toast({
				title: `Please Fill Remaining Fields`,
				status: "warning",
				isClosable: true,
			})
			setLoadingThing(false)
		}
		
	}
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
					<Box width={"100vw"} background={"gray.500"}>
					<Flex flexDir={"column"} width={"100vw"}>
								<form>
									<Flex justifyContent={"center"}>
										<Badge colorScheme={"black"} fontFamily={"Inter"} p={1} fontSize={20} display={"flex"}>your Contact Information &nbsp; <GrContactInfo size={30} /></Badge>
									</Flex>
									<Grid
										templateColumns={"repeat(2,1fr)"}
									>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaUser color='white' />
												</InputLeftElement>
												<Input placeholder='Full Name' bg={"#222"} color={"white"} isRequired required onChange={(event) => changeName(event.target.value)} value={custName} />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaPhone color='white' />
												</InputLeftElement>
												<Input placeholder='Phone Number (xxx)xxx-xxxx' bg={"#222"} color={"white"} type={"number"} required onChange={(event) => changePhoneNum(event.target.value)} value={custPhoneNum} />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<RiMailFill color='white' />
												</InputLeftElement>
												<Input placeholder='Email' bg={"#222"} color={"white"} onChange={(event) => changeEmail(event.target.value)} value={custEmail} required isRequired />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={1} m={1}>
											<Grid templateColumns={"repeat(3,1fr)"}>
												<GridItem width={250}>
													<InputGroup>
														<InputLeftElement>
															<FaHome color='white' />
														</InputLeftElement>
														<Input placeholder='Address' bg={"#222"} color={"white"} onChange={(event) => changeAddress(event.target.value)} value={custAddress} isRequired required />
													</InputGroup>
												</GridItem>
												<GridItem>
													<InputGroup>
														<InputLeftElement>
															<GiModernCity color='white' size={26} />
														</InputLeftElement>
														<Input placeholder='City' bg={"#222"} color={"white"} onChange={(event) => changeCity(event.target.value)} value={custCity} isRequired required />
													</InputGroup>
												</GridItem>
												<GridItem>
													<InputGroup>
														<InputLeftElement>
															<FaSearchLocation color='white' />
														</InputLeftElement>
														<Input placeholder='Zip Code' bg={"#222"} color={"white"} onChange={(event) => changeZip(event.target.value)} value={custZip} isRequired required />
													</InputGroup>
												</GridItem>
											</Grid>

										</GridItem>
										<GridItem colSpan={2}>
											<Flex justifyContent={"center"}>
												<Badge colorScheme={"black"} fontFamily={"Inter"} fontSize={20}>When Are you Available?</Badge>
											</Flex>
											<Flex justifyContent={"center"} height={65}>
												<Button display={"flex"} flexDir={"column"} onClick={() => changeWeekdayButtonState()} id={weekDayID} m={1} width={"100%"} height={"100%"}>
													<Text>Any Time Weekdays</Text>
													<Text textAlign={"center"} fontSize={12}>(Mon-Fri)</Text>
												</Button>
												<Button display={"flex"} flexDir={"column"} onClick={() => changeWeekEndButtonState()} id={weekEndID} m={1} width={"100%"} height={"100%"}>
													<Text>Any Time Weekends</Text>
													<Text textAlign={"center"} fontSize={12}>(Sat-Sun)</Text>
												</Button>
											</Flex>
											<Flex justifyContent={"center"} pt={3}>
												<Accordion allowToggle>
													<AccordionItem>
														<AccordionButton justifyContent={"center"} bg={"#ff4300"} rounded={6}>
															Change availability for specific days and time periods
															<AccordionIcon />
														</AccordionButton>
														<AccordionPanel>
															<Flex>
																<InputGroup>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeSundayButtonState()} id={SundayID}>
																		Sunday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeMondayButtonState()} id={MondayID}>
																		Monday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeTuesdayButtonState()} id={TuesdayID}>
																		Tuesday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeWednesdayButtonState()} id={WednesdayID}>
																		Wednesday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeThursdayButtonState()} id={ThursdayID}>
																		Thursday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeFridayButtonState()} id={FridayID}>
																		Friday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeSaturdayButtonState()} id={SaturdayID}>
																		Saturday
																	</Button>
																</InputGroup>
															</Flex>
															<Flex color={"whiteAlpha.900"} justifyContent={"center"} m={3}>
																<CheckboxGroup>
																	<Flex display={"flex"} flexDir={"column"}>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={()=> changeMornings()}>
																			Morning (8AM-10AM)
																		</Checkbox>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={()=> changeEvenings()}>
																			Evening (10AM-12PM)
																		</Checkbox>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={() => changeAfternoons()}>
																			Afternoon (12PM-5PM)
																		</Checkbox>
																	</Flex>
																</CheckboxGroup>
															</Flex>
															<Divider bg={"black"} mt={1} />
															<Divider bg="black" />

														</AccordionPanel>
													</AccordionItem>
												</Accordion>
											</Flex>
										</GridItem>
										<GridItem colSpan={2}>
											<Flex justifyContent={"center"} pt={2}>
												<Badge colorScheme={"black"} fontFamily={"Inter"} fontSize={24}>How Can We Help?</Badge>
											</Flex>
											<Textarea onChange={(event) => changeMessage(event.target.value)} value={custMessage} bg={"#222"} color={"white"} isRequired>

											</Textarea>
										</GridItem>
										<GridItem colSpan={2} p={3} display={"flex"} justifyContent={"center"}>
											<Button colorScheme={"blue"} isLoading={loadingThing} loadingText='Submitting Request' onClick={(e) => handleSubmit(e)} type={"submit"}>Submit</Button>
										</GridItem>
									</Grid>
								</form>
							</Flex>
					</Box>
					</>
				: <></>}
				{showTablet ? 
				<>
					<Box width={"100vw"} background={"gray.500"}>
					<Flex flexDir={"column"} width={"100vw"}>
								<form>
									<Flex justifyContent={"center"}>
										<Badge colorScheme={"black"} fontFamily={"Inter"} p={1} fontSize={20} display={"flex"}>your Contact Information &nbsp; <GrContactInfo size={30} /></Badge>
									</Flex>
									<Grid
										templateColumns={"repeat(2,1fr)"}
									>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaUser color='white' />
												</InputLeftElement>
												<Input placeholder='Full Name' bg={"#222"} color={"white"} required onChange={(event) => changeName(event.target.value)} value={custName} />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaHome color='white' />
												</InputLeftElement>
												<Input placeholder='Address' bg={"#222"} color={"white"} onChange={(event) => changeAddress(event.target.value)} value={custAddress} required isRequired />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaPhone color='white' />
												</InputLeftElement>
												<Input placeholder='Phone Number (xxx)xxx-xxxx' bg={"#222"} color={"white"} type={"number"} required onChange={(event) => changePhoneNum(event.target.value)} value={custPhoneNum} />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<GiModernCity color='white' size={26} />
												</InputLeftElement>
												<Input placeholder='City' bg={"#222"} color={"white"} onChange={(event) => changeCity(event.target.value)} value={custCity} required isRequired />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<RiMailFill color='white' />
												</InputLeftElement>
												<Input placeholder='Email' bg={"#222"} color={"white"} onChange={(event) => changeEmail(event.target.value)} value={custEmail} required isRequired />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={1} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaSearchLocation color='white' />
												</InputLeftElement>
												<Input placeholder='Zip Code' bg={"#222"} color={"white"} onChange={(event) => changeZip(event.target.value)} value={custZip} required isRequired />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={2}>
											<Flex justifyContent={"center"}>
												<Badge colorScheme={"black"} fontFamily={"Inter"} fontSize={20}>When Are you Available?</Badge>
											</Flex>
											<Flex justifyContent={"center"} height={65}>
												<Button display={"flex"} flexDir={"column"} onClick={() => changeWeekdayButtonState()} id={weekDayID} m={1} width={"100%"} height={"100%"}>
													<Text>Any Time Weekdays</Text>
													<Text textAlign={"center"} fontSize={12}>(Mon-Fri)</Text>
												</Button>
												<Button display={"flex"} flexDir={"column"} onClick={() => changeWeekEndButtonState()} id={weekEndID} m={1} width={"100%"} height={"100%"}>
													<Text>Any Time Weekends</Text>
													<Text textAlign={"center"} fontSize={12}>(Sat-Sun)</Text>
												</Button>
											</Flex>
											<Flex justifyContent={"center"} pt={3}>
												<Accordion allowToggle>
													<AccordionItem>
														<AccordionButton justifyContent={"center"} bg={"#ff4300"} rounded={6}>
															Change availability for specific days and time periods
															<AccordionIcon />
														</AccordionButton>
														<AccordionPanel>
															<Flex>
																<InputGroup>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeSundayButtonState()} id={SundayID}>
																		Sunday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeMondayButtonState()} id={MondayID}>
																		Monday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeTuesdayButtonState()} id={TuesdayID}>
																		Tuesday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeWednesdayButtonState()} id={WednesdayID}>
																		Wednesday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeThursdayButtonState()} id={ThursdayID}>
																		Thursday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeFridayButtonState()} id={FridayID}>
																		Friday
																	</Button>
																	<Button bg={"rgb(200,200,200)"} onClick={() => changeSaturdayButtonState()} id={SaturdayID}>
																		Saturday
																	</Button>
																</InputGroup>
															</Flex>
															<Flex color={"whiteAlpha.900"} justifyContent={"center"} m={3}>
																<CheckboxGroup>
																	<Flex display={"flex"} flexDir={"column"}>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={()=> changeMornings()}>
																			Morning (8AM-10AM)
																		</Checkbox>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={()=> changeEvenings()}>
																			Evening (10AM-12PM)
																		</Checkbox>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={() => changeAfternoons()}>
																			Afternoon (12PM-5PM)
																		</Checkbox>
																	</Flex>
																</CheckboxGroup>
															</Flex>
															<Divider bg={"black"} mt={1} />
															<Divider bg="black" />

														</AccordionPanel>
													</AccordionItem>
												</Accordion>
											</Flex>
										</GridItem>
										<GridItem colSpan={2}>
											<Flex justifyContent={"center"} pt={2}>
												<Badge colorScheme={"black"} fontFamily={"Inter"} fontSize={24}>How Can We Help?</Badge>
											</Flex>
											<Textarea onChange={(event) => changeMessage(event.target.value)} value={custMessage} bg={"#222"} color={"white"} isRequired>

											</Textarea>
										</GridItem>
										<GridItem colSpan={2} p={3} display={"flex"} justifyContent={"center"}>
											<Button colorScheme={"blue"} isLoading={loadingThing} loadingText='Submitting Request' onClick={(e) => handleSubmit(e)} type={"submit"}>Submit</Button>
										</GridItem>
									</Grid>
								</form>
							</Flex>
					</Box>
					
				</>
				:<></>}
				{showMobile ?
				<>
					<Box width={"100vw"} background={"gray.500"}>
							<Flex flexDir={"column"} width={"100%"}>
								<form>
									<Flex justifyContent={"center"}>
										<Badge colorScheme={"black"} fontFamily={"Inter"} p={1} fontSize={20} display={"flex"}> your Contact Information &nbsp; <GrContactInfo size={30} /></Badge>
									</Flex>
									<Grid
										templateColumns={"repeat(2,1fr)"}
									>
										<GridItem colSpan={2} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaUser color='white' />
												</InputLeftElement>
												<Input placeholder='Full Name or Company Name' bg={"#222"} color={"white"} required onChange={(event) => changeName(event.target.value)} value={custName} />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={2} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaPhone color='white' />
												</InputLeftElement>
												<Input placeholder='Phone Number (xxx)xxx-xxxx' bg={"#222"} color={"white"} type={"number"} required onChange={(event) => changePhoneNum(event.target.value)} value={custPhoneNum} />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={2} m={1}>
											<InputGroup>
												<InputLeftElement>
													<RiMailFill color='white' />
												</InputLeftElement>
												<Input placeholder='Email' bg={"#222"} color={"white"} onChange={(event) => changeEmail(event.target.value)} value={custEmail} required />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={2} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaHome color='white' />
												</InputLeftElement>
												<Input placeholder='Address' bg={"#222"} color={"white"} onChange={(event) => changeAddress(event.target.value)} value={custAddress} required />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={2} m={1}>
											<InputGroup>
												<InputLeftElement>
													<GiModernCity color='white' size={26} />
												</InputLeftElement>
												<Input placeholder='City' bg={"#222"} color={"white"} onChange={(event) => changeCity(event.target.value)} value={custCity} required />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={2} m={1}>
											<InputGroup>
												<InputLeftElement>
													<FaSearchLocation color='white' />
												</InputLeftElement>
												<Input placeholder='Zip Code' bg={"#222"} color={"white"} onChange={(event) => changeZip(event.target.value)} value={custZip} required />
											</InputGroup>
										</GridItem>
										<GridItem colSpan={2}>
											<Flex justifyContent={"center"}>
												<Badge colorScheme={"black"} fontFamily={"Inter"} fontSize={20}>When Are you Available?</Badge>
											</Flex>
											<Flex justifyContent={"center"} height={65}>
												<Button display={"flex"} flexDir={"column"} onClick={() => changeWeekdayButtonState()} id={weekDayID} m={1} width={"100%"} height={"100%"}>
													<Text>Any Time Weekdays</Text>
													<Text textAlign={"center"} fontSize={12}>(Mon-Fri)</Text>
												</Button>
												<Button display={"flex"} flexDir={"column"} onClick={() => changeWeekEndButtonState()} id={weekEndID} m={1} width={"100%"} height={"100%"}>
													<Text>Any Time Weekends</Text>
													<Text textAlign={"center"} fontSize={12}>(Sat-Sun)</Text>
												</Button>
											</Flex>
											<Flex justifyContent={"center"} pt={3}>
												<Accordion allowToggle>
													<AccordionItem>
														<AccordionButton justifyContent={"center"} bg={"#ff4300"} rounded={6}>
															Change availability for specific days and time periods
															<AccordionIcon />
														</AccordionButton>
														<AccordionPanel >
															<Flex justifyContent={"center"}>
																<Flex width={350} overflowX={"scroll"} justifyContent={"center"}>
																	<InputGroup width={812} border={"1px"} paddingLeft={"232px"}>
																		<Button bg={"rgb(200,200,200)"} onClick={() => changeSundayButtonState()} id={SundayID} width={116}>
																			Sunday
																		</Button>
																		<Button bg={"rgb(200,200,200)"} onClick={() => changeMondayButtonState()} id={MondayID} width={116}>
																			Monday
																		</Button>
																		<Button bg={"rgb(200,200,200)"} onClick={() => changeTuesdayButtonState()} id={TuesdayID} width={116}>
																			Tuesday
																		</Button>
																		<Button bg={"rgb(200,200,200)"} onClick={() => changeWednesdayButtonState()} id={WednesdayID} width={116}>
																			Wednesday
																		</Button>
																		<Button bg={"rgb(200,200,200)"} onClick={() => changeThursdayButtonState()} id={ThursdayID} width={116}>
																			Thursday
																		</Button>
																		<Button bg={"rgb(200,200,200)"} onClick={() => changeFridayButtonState()} id={FridayID} width={116}>
																			Friday
																		</Button>
																		<Button bg={"rgb(200,200,200)"} onClick={() => changeSaturdayButtonState()} id={SaturdayID} width={116}>
																			Saturday
																		</Button>
																	</InputGroup>
																</Flex>
															</Flex>

															<Flex color={"whiteAlpha.900"} justifyContent={"center"} m={3}>
																<CheckboxGroup>
																	<Flex display={"flex"} flexDir={"column"}>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={()=> changeMornings()}>
																			Morning (8AM-10AM)
																		</Checkbox>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={()=> changeEvenings()}>
																			Evening (10AM-12PM)
																		</Checkbox>
																		<Checkbox p={1} border={"1px"} bg={"rgb(100,100,100)"} rounded={6} onClick={() => changeAfternoons()}>
																			Afternoon (12PM-5PM)
																		</Checkbox>
																	</Flex>
																</CheckboxGroup>
															</Flex>
															<Divider bg={"black"} mt={1} />
															<Divider bg="black" />

														</AccordionPanel>
													</AccordionItem>
												</Accordion>
											</Flex>
										</GridItem>
										<GridItem colSpan={2}>
											<Flex justifyContent={"center"} pt={2}>
												<Badge colorScheme={"black"} fontFamily={"Inter"} fontSize={24}>How Can We Help?</Badge>
											</Flex>
											<Textarea onChange={(event) => changeMessage(event.target.value)} value={custMessage} bg={"#222"} color={"white"} isRequired>

											</Textarea>
										</GridItem>
										<GridItem colSpan={2} p={3} display={"flex"} justifyContent={"center"}>
											<Button colorScheme={"blue"} isLoading={loadingThing} loadingText='Submitting Request' onClick={(e) => handleSubmit(e)} type={"submit"}>Submit</Button>
										</GridItem>
									</Grid>
								</form>
							</Flex>
					</Box>
				</>
				:<></>}
					<Footer/>

			</>
		)
}