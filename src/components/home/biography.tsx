import React from 'react'

import { Box, Heading, Table, TableContainer, Tbody, Td, Tr, Text, Stack } from '@chakra-ui/react'

const Biography = () => (
  <Box pt={7}>
    <Heading variant='sectionTitle'>Biography</Heading>
    <Stack py={3}>
      <Text variant='callout'>Hi, I am a university student studying algorithms in Japan!</Text>
      <TableContainer pt={5}>
        <Table variant='biography' size='sm'>
          <Tbody>
            <Tr>
              <Td>
                <Text fontWeight='bold'>2019</Text>
              </Td>
              <Td>Enrolled in a Japanese university</Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight='bold'>2022 to present</Text>
              </Td>
              <Td>University Student</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  </Box>
)

export default Biography
