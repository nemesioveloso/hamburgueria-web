import { Box } from '@mui/material'
import './App.css'
import { Router } from './routes/routes'
import { ResponsiveAppBar } from './components/ResponsiveAppBar'
import { Carousel } from './components/Carrosel'
import { Banner } from './components/Banner'
import { Cards } from './components/Cards'

export function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Carousel />
      <Banner />
      <Cards />
      <Router />
    </Box>
  )
}
