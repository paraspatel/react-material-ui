import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


class CustomDialog extends Component {
    constructor(props){
        super(props)
        this.state = { 
            open: false, 
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }        
        }
    }

    handleToggle = () => {
        this.setState({ open: !this.state.open })
    }

    handleChange = name => ({target: { value }}) => {
        this.setState({
          exercise: {  
            ...this.state.exercise,  
            [name]: value,
          }
        });
      };

    handleSubmit = () => {
        const { exercise } = this.state
        this.props.onCreate({...exercise, id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')})
        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }        
        })
    }  
    
    render(){   
        const { open, exercise: { title, description, muscles } } = this.state,
              { muscles: categories } = this.props
        return( 
            <div> 
                <Fab aria-label="Add" size="small" onClick={this.handleToggle}>
                    <AddIcon />
                </Fab>
                <Dialog
                open={open}
                onClose={this.handleToggle}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send
                    updates occasionally.
                </DialogContentText>
                <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                />
                <br />
                <TextField
                label="Description"
                value={description}
                multiline
                rows="4"
                onChange={this.handleChange('description')}
                margin="normal"
                />
                <br />
                <FormControl>
                <InputLabel htmlFor="age-simple">Muscles</InputLabel>
                <Select
                    value={muscles}
                    onChange={this.handleChange('muscles')}
                >
                    { categories.map(category => 
                        <MenuItem value={category}>{category}</MenuItem>
                    )}                        
                </Select>
                </FormControl>                

                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleToggle} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handleSubmit} color="primary">
                    Create
                </Button>
                </DialogActions>
                </Dialog>
            </div>    
        )    
    }
}
export default CustomDialog;     