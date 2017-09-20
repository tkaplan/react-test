import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleKeyUp } from '../store/key/action'
class NameList extends Component {
  handleEvent(key){
    console.log(key)
  }
  render(){
    let names = this.props.names.map((name, index) => {
      return (
        <li
          key={index}>
        {name}
        </li>
      )
    })

    return (
      <div>
        <ul>
          {names}
        </ul>
        <input
          onKeyUp={(event) => this.props.handleKeyUp(event.key)}
          />
      </div>
    )
  }
}
const getFilteredNames = (names, key) => {
  if (key == null) return names
  return names.filter((name)=> name[0].toLowerCase() == key )
}
const mapStateToProps = (state) =>{
  return {
    names: getFilteredNames(state.names, state.key)
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({handleKeyUp: handleKeyUp},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NameList)
