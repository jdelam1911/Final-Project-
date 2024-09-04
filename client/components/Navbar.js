import { Box, Flex, Link} from "@chakra-ui/react"

const Navbar = () => {
    return (
        <Box bg="teal.500" p={4}>
             <Flex>
                <Link href="/" color="white" mr={4}>Home</Link>
                <Link href="/add" color="white">Add Field</Link>
            </Flex>
        </Box>
    )
}

export default Navbar