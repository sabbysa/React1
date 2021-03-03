import React , {Component} from 'react'
import './App.css'
import Greet from './components/Greet'
import Click from './components/Click'
import Bind from './components/Bind'
import Parent from './components/Parent'
import Function1 from './Props/Function1'
import ClassState from './State/ClassState'
import Todo from'./Task/Todo'
import ParentToChild from './Update/ParentToChild'
import ParentClass from './LifeCycleHooks/ParentClass'
import LifeCycle from './LifeCycleHooks/LifeCycle'
import ParentClass2 from './PureComponent/ParentClass2'
import Fun1 from './ErrorBoundary/Fun1'
import Apiclass from './Apis/ApiClass'
import ReactHooks from './ReactHooks/ReactHooks'
import Count from './components/Count'
import TodoForm from './Todo/TodoForm'
import ApiAx from './ApiAxios/ApiAx'
import AddUser from './ApiAxios/AddUser'
import ShowSearch from './ATask1/ShowSearch'

class App extends Component {
  render(){
    return (
      <div className = "App">
        {/* <ApiAx/>
        <AddUser/> */}
        {/* <ReactHooks></ReactHooks> */}
        {/* <Apiclass></Apiclass> */}
        {/* <Fun1></Fun1> */}
        {/* <ParentClass2></ParentClass2> */}
        {/* <LifeCycle></LifeCycle> */}
{/* <ParentClass></ParentClass> */}
        {/* <ParentToChild></ParentToChild> */}
        {/* <Todo/> */}
        {/* <ClassState/> */}
        {/* <Function1/> */}
        {/* <Parent/> */}
        {/* <Bind/> */}
        {/* <Click/> */}
      {/* <Greet name = "Abi" ></Greet> */}
      {/* <Count></Count> */}
      {/* <Greet></Greet> */}
      {/* <h1>TodoApp</h1> */}
      {/* <TodoForm/> */}
     {/* <ApiCall/> */}
    <ShowSearch/>
      </div>
    )
  }

}
export default App