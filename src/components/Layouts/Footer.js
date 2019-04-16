import React, { Fragment, Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class Footer extends Component {
    constructor(props){
      super(props);    
      this.state = {
        value: 0,
        muscles: this.props.muscles,
        category: this.props.category
      }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    onIndexChange = (event, index) => {
        this.props.onSelect(index === 0 ? '' : this.state.muscles[index-1])
    };

    render(){
        const muscles = this.state.muscles;
        const index = this.props.category ? muscles.findIndex((group) => group === this.props.category) + 1 : 0
        return(
            <Fragment>
                <Paper>
                    <Tabs centered indicatorColor="primary"
                        textColor="primary" value={index}
                        onChange={this.onIndexChange}>
                        <Tab label='All'></Tab>
                        {muscles.map(group => 
                          <Tab key={group} label={group} />    
                        )}                        
                    </Tabs>
                </Paper>
            </Fragment>
        )
    }    
}

export default Footer