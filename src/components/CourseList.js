import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Course from '../components/Course'


class CouseList extends Component {
    state = {
        courses: [123,456,789],
        searchSting: ''
    }

    constructor(){
        super()
        this.getCourses()
    }

    getCourses = () => {

    }

    onSearchInputChange = (e) => {
        if (e.target.value){
            this.setState({ searchSting: e.target.value })
        } else {
            this.setState({ searchSting: '' })
        }
    }

    render(){
        return(
            <div>
                { this.state.courses ? (
                  <div>
                    <TextField style={{padding: 24}}
                      id="searchInput"
                      placeholder="search for courses"
                      onChange={this.onSearchInputChange}
                      variant="outlined"
                    />
                    <Grid container stype={{padding: 24}}>
                        { this.state.courses.map(currentCourse => (
                            <Grid item xs={12}>
                                <Course course={currentCourse} />
                            </Grid>
                        )) }
                    </Grid>
                  </div>      
                ) : 'No result found' }
            </div>    
        )
    } 
}

export default CouseList;