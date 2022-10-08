import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Teacher 01",
      photo: "https://github.com/41SergioF.png",
      value: 150.00,
      description: "DEv Professor."
    },
    {
      id: 2,
      name: "Teacher 02",
      photo: "https://github.com/41SergioF.png",
      value: 150.00,
      description: "DEv Professor."
    },
    {
      id: 3,
      name: "Teacher 03",
      photo: "https://github.com/41SergioF.png",
      value: 150.00,
      description: "DEv Professor."
    },
    {
      id: 4,
      name: "Teacher 04",
      photo: "https://github.com/41SergioF.png",
      value: 150.00,
      description: "DEv Professor."
    },
  ] 

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <List teachers={teachers}></List>
    </Box>
  )
}

export default Home
