import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a full-stack developer based in Guatemala!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box FlexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shubert Alonzo
          </Heading>
          <p>Full-stack Developer/Student/Writter</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
