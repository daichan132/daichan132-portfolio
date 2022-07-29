import React from 'react'

import { Box, Heading, Table, TableContainer, Tbody, Td, Tr, Text, Stack } from '@chakra-ui/react'

const Biography = () => (
  <Box>
    <Heading variant='sectionTitle' fontSize='xl'>
      Biography
    </Heading>
    <Stack py={3} px={3}>
      <Text variant='callout'>I am learning about algorithms in a Japanese university.</Text>
      <TableContainer py={3}>
        <Table variant='unstyled' size='sm'>
          <Tbody>
            <Tr>
              <Td>2019</Td>
              <Td>Enrolled in a Japanese university</Td>
            </Tr>
            <Tr>
              <Td> 2022 to present</Td>
              <Td>University Student</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  </Box>
)

export default Biography
