import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Portfolio from './Portfolio'
import projects from './projects'

const Title = styled.h1`
  font-family: verdana;
  font-size: 24pt;
  color: #EEE;
  background-color: #222;
  text-align: center;
  margin: 0;
  padding: 2rem 0;
`

class App extends Component {
  componentDidMount() {
    injectGlobal`
    body {
      margin: 0;
      padding: 0;
      font-family: arial;
    }
  `
  }
  render() {
    return (
      <section>
        <Title>Portfolio Bertrand Larsy</Title>
        <Portfolio projects={projects} />
      </section>
    )
  }
}

export default App
