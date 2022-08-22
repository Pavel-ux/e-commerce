import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6
                    }}
                >
                    <Container maxWidth='sm'>
                        <Typography component='h1' variant='h3' align='center' color='text.primary' gutterBottom>
                            About us
                        </Typography>
                        <Typography variant='h5' align='center' color='text.secondary' paragraph>
                            We are an online store with a team of 20 creative people. We have a reputation for delivering creative concepts, with a
                            high focus on execution down to the very last detail.
                        </Typography>
                        <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <Button variant='contained'>Back to store</Button>
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            </main>
            {/* Footer */}

            {/* End footer */}
        </ThemeProvider>
    )
}

export default About
