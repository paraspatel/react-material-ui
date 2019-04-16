import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography' 
import CustomDialog from '../Exercises/Dialogs/create'

const Header = (props) => {    
    return( 
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{ flex: 1 }} variant="h6" color="inherit">
                        Welcome to Header
                    </Typography>
                    <div>
                    <Typography >
                       <CustomDialog muscles={ props.muscles } onCreate={props.onExerciseCreate}/>
                    </Typography>
                    </div>
                </Toolbar>
            </AppBar>         
        </Fragment>
    )  
}

export default Header