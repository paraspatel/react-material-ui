import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Exercise = ({ exercises, category, onSelect, exercise }) => {
    return(
        <Fragment>
            <Grid container>    
                <Grid item sm>
                    <Paper>
                        { exercises.map(([group,exercises]) => 
                            !category || group === category 
                            ?
                            <Fragment key={group}>
                                <Typography >
                                    {group}
                                </Typography>
                                <List component="ul">
                                {exercises.map(({id, title}) => 
                                    <ListItem button key={id} onClick={() => onSelect(id)}>
                                        <ListItemText primary={title} />
                                    </ListItem>                            
                                )}
                                </List>
                            </Fragment>    
                            : null
                         )} 
                    
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper>
                    <Fragment>
                        <Typography>
                            {exercise.title}
                        </Typography>
                        <Typography>
                            {exercise.description}
                        </Typography>    
                    </Fragment>        
                    </Paper>     
                </Grid>
            </Grid>
        </Fragment>   
    )
}

export default Exercise