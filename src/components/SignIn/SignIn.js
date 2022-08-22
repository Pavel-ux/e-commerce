import React from 'react'
import { Avatar, Button, CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'

const SignIn = () => {
    const classes = useStyles()
    return (
        <div>
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>Email Address</InputLabel>
                            <Input id='email' name='email' autoComplete='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input name='password' type='password' id='password' autoComplete='current-password' />
                        </FormControl>
                        <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        </div>
    )
}

export default SignIn
