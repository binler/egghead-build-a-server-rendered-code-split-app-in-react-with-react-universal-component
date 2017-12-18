import React from 'react'
import './App.css';
import universal from 'react-universal-component';

// import HomeTab from './Home'
// import FooTab from './Foo'
// import BarTab from './Bar'
/* Now, with lazy loading: */
const HomeTab = universal(import('./Home.js'))
const FooTab = universal(import('./Foo.js'))
const BarTab = universal(import('./Bar.js'))

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'Foo' }
  }

  render() {
    return (
      <div>
        { this.state.selected === 'Home' &&
          <HomeTab /> }
        { this.state.selected === 'Foo' &&
          <FooTab /> }
        { this.state.selected === 'Bar' &&
          <BarTab /> }

        <button onClick={ () => this.setState({ selected: 'Home' }) }>
          Home
        </button>
        <button onClick={ () => this.setState({ selected: 'Foo' }) }>
          Foo
        </button>
        <button onClick={ () => this.setState({ selected: 'Bar' }) }>
          Bar
        </button>
      </div>
    )
  }
}
