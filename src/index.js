import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Metronome from './components/Metronome/Metronome'
import Knob from './components/measureToggle/measureToggle'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')

class App extends Component {
    constructor() {
        super()

        this.state = {
            beatsPerMeasure: 4
        }
    }

    setAppMeasure = (beatsPerMeasure) => {
        this.setState({ beatsPerMeasure })
        console.log('bpm', beatsPerMeasure, this.state.beatsPerMeasure)
    }

    render () {
        return(
            <div>
                <div className="title">Metronome</div>
                <div className="input-wrapper">
                    <Knob max="8" value="4" setAppMeasure={this.setAppMeasure}/>
                    <Metronome beatsPerMeasure={this.state.beatsPerMeasure}/>
                </div>
            </div>)
    }
}

ReactDOM.render(<App />, rootElement)

registerServiceWorker();
