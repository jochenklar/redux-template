import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as itemActions from '../actions/itemActions'
import Button from '../components/Button'


class Main extends Component {

  render() {
    const { items, actions } = this.props

    return(
      <div className="container">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet.</p>
        <p>
          <a href="#">
            Lorem ipsum dolor sit amet
          </a>
        </p>
        <p>
          <Button onClick={actions.fetchItems} />
        </p>
        <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    )
  }
}

Main.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
