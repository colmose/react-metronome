import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './measureToggle.css'

class Knob extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          max: this.props.max || 8,
          value: this.props.value || 0,
          degree: this.valueToRadian(this.props.value)
        }
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        return nextState.value !== this.state.value
      }
    
      handleChange(value) {
        this.props.setAppMeasure(value)
        this.setState({
          value: value,
          degree: this.valueToRadian(value)
        }, () => {
          if (this.props.onChangeValue) {
            this.props.onChangeValue(this.state.value)
          }
        })
      }
    
      valueToRadian(value) {
        return Math.round((value / this.props.max) * 270)
      }
    
      render() {
        return (
          <div className="Knob">
            <div className="Knob-label">
              <input
                type="number"
                min={this.props.min || 0}
                max={8}
                ref="input"
                className="Knob-value"
                defaultValue={this.props.value}
                value={this.state.value}
                onChange={ evt => this.handleChange(evt.target.value)}
                onWheel={ () => ReactDOM.findDOMNode(this.refs.input).focus()}
              />
            </div>
            <div
              className="Knob-spinner"
              style={{
                transform: `rotate(${-45 + this.state.degree}deg)`
              }}
            >
            </div>
          </div>
        )
      }
    
    }

export default Knob