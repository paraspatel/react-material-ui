import React from 'react'
import Card from '@material-ui/core/Card'


const Course = (props) => {
    return(
        <div>
            { props.course ? (
                <div>
                  {props.course}
                </div>    
            ) : null

            }
        </div>    
    )
}

export default Course