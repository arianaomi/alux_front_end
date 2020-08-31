import React, { Component } from 'react'
import dynamic from 'next/dynamic'

const QrReader = dynamic(() => import('react-qr-scanner'), { ssr: false })

class Scanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 100,
      result: 'No result'
    }

    this.handleScan = this.handleScan.bind(this)
  }

  handleScan (data) {
    this.setState({
      result: data
    })
  }

  handleError (err) {
    console.error(err)
  }

  render () {
    const previewStyle = {
      height: 168,
      width: 300
    }

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Scanner
