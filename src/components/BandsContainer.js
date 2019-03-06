import React, { Component } from 'react'
import Band from './Band'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map((band) => <Band band={band} key={band.id} delete={this.props.delete}/>)
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete:  name => dispatch({ type: "DELETE_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
