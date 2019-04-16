import React, { Component } from 'react';
import { Header, Footer } from './components/Layouts'
import { Exercise } from './components/Exercises'
import { Clock } from './components/Clock'
import { exercises, muscles } from './store' 

class App extends Component {
  state = {
    exercises,
    category: '',
    exercise: {}
  }

  getExercisesByMuscles()  {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise ] : [exercise] 
      return exercises
    } ,{}))
  }

  handleOnSelect = (category) => {
    this.setState({ category })
  }

  handleOnSelectExercise = (id) => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id)
    })) 
  }

  handleExerciseCreate = (exercise) => {
    this.setState(({ exercises }) => ({ 
       exercises: [
         ...exercises, 
         exercise
       ] 
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles()
    return (
          <div>            
           <Header muscles={ muscles } onExerciseCreate={this.handleExerciseCreate} />
           <Exercise exercises={ exercises } category ={this.state.category} onSelect={this.handleOnSelectExercise} exercise={this.state.exercise} />
           <Footer muscles={ muscles } category={this.state.category} onSelect={this.handleOnSelect}/>
          </div>
    );
  }
}

export default App;
