import * as React from 'react' 
import { useState, useEffect } from 'react'
import { Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalFooter,
	ModalBody,
	ModalHeader,
	Input,
	Text,
	useToast,
	position} from '@chakra-ui/react'


import emailjs from 'emailjs-com'

export const Apply = () =>{
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [name, setName] = useState(null)
	const [phoneNum, setPhoneNum] = useState(null)
	const [postion, setPosition] = useState(null)
	const [reference, setReference] = useState(null)
	const [email, setEmail] = useState(null)

	const [loadingThing, setLoadingThing] = useState(false)
	const toast = useToast()
	function handleSubmit(e){
		e.preventDefault();
		setLoadingThing(true)
		var templateParams = {
			from_name: name,
			aphone: phoneNum,
			reply_to: email,
			aposition: postion,
			areference: reference
		}
		emailjs.send("service_752e8y1", "template_4dwkwhb", templateParams, "IRSqXt1N73Umfih4a")
				.then((result) => {
					setTimeout(() => {
						setEmail("")
						setName("")
						setPhoneNum("")
						setPosition("")
						setReference("")
						setLoadingThing(false)
						onClose()
						toast({
						title: 'Application Submitted Successfully!',
						description: "We'll contact you as soon as possible, have a great day!",
						status: 'success',
						duration: 9000,
						isClosable: true,
						})
					}, 3000)
				},(error) => {
					toast({
						title: `Application Not Sent, Please Try Again Later... (if error keeps occuring please contact us directly @ info@landoffiretrucking.com)`,
						status: "error",
						isClosable: true,
					})
				})
		if (name.length > 0 && phoneNum.length > 0 && position.length > 0 && reference.length){
			
		} else {
			toast({
				title: `Please Fill Remaining Fields`,
				status: "warning",
				isClosable: true,
			})
			setLoadingThing(false)
		}
	}
	return(
			<>
				<Button onClick={onOpen}>Apply</Button>

				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Application</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text>Full Name *</Text>
							<Input placeholder='ex: John Doe Jr' isRequired onChange={() => setName(this.value)}/>
							<Text>Phone Number *</Text>
							<Input placeholder='+1(123)456-6789' isRequired onChange={() => {setPhoneNum(this.value)}} />
							<Text>Email</Text>
							<Input placeholder='you@email.com' onChange={() => {setEmail(this.value)}} />
							<Text>Position Interested In *</Text>
							<Input placeholder='ex. CDL Liscenced Truck Driver' isRequired onChange={() => {setPosition(this.value)}} />
							<Text>How did you hear about us? *</Text>
							<Input placeholder='Friend, Google, Reference?' isRequired onChange={() => {setReference(this.value)}} />
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='red' mr={3} onClick={onClose}>
							Cancel
							</Button>
							<Button colorScheme={'blue'} type="submit" onClick={(e) => handleSubmit(e)} isLoading={loadingThing}>Submit</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
		)
}