import React, { Component } from 'react'
import Char from '../components/Char'
import OutputChooser from '../components/OutputChooser'
import Notification from '../components/Notification'
import { charsList } from '../misc/charsList'
import { toClipboard } from 'copee'

// Layouts
import Page from '../layouts/page'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: 'char',
      copied: '',
      notificationActive: false,
    }
    this.handleCopy = this.handleCopy.bind(this)
    this.handleChoiceChange = this.handleChoiceChange.bind(this)
  }

  handleCopy(char) {
    const prefixes = {
      css: '\\',
      javascript: '\\u',
      'hexadecimal-ncr': '&#x',
    }

    let charType
    let pre = ''
    if (this.state.choice === 'char') {
      charType = 'char'
    } else {
      charType = 'hexadecimal'
      pre = prefixes[this.state.choice]
    }

    const copyText = '' + pre + char[charType]
    console.log('copied:', copyText)
    toClipboard(copyText)
    this.setState({
      copied: copyText,
      notificationActive: true,
    })

    setTimeout(() => {
      this.setState({
        notificationActive: false,
      })
    }, 1000)
  }

  handleChoiceChange(choice) {
    console.log('choice:', choice)
    this.setState({
      choice: choice,
    })
  }

  render() {
    return (
      <Page>
        <div className="l-container">
          <h1 className="text-centre">Programmer's Clipboard</h1>

          <OutputChooser
            choice={this.state.choice}
            handleChoiceChange={this.handleChoiceChange}
          />
          <div className="Chars">
            {charsList.map((item) => (
              <Char
                data={item}
                choice={this.state.choice}
                key={item.hexadecimal}
                handleCopy={this.handleCopy}
              />
            ))}
          </div>
          <Notification
            text={this.state.copied}
            active={this.state.notificationActive}
          />
        </div>
        <style jsx>{``}</style>
      </Page>
    )
  }
}
