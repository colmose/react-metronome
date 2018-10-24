import React from 'react'
import ReactDOM from 'react-dom'
import MeasureToggle from './measureToggle'

describe('MeasureToggle', () => {    
    it('renders without exploding', () => {
        const div = document.createElement('div')
        ReactDOM.render(<MeasureToggle />, div)
    })
})