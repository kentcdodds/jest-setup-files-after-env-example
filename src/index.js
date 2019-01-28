import React from 'react'

class Counter extends React.Component {
  state = {count: 0}
  increment = () => this.setState(({count}) => ({count: count + 1}))
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Click me</button>
      </div>
    )
  }
}

export default Counter