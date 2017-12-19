import React from 'react';
import './App.css';
import universal from 'react-universal-component';

// import HomeTab from './Home'
// import FooTab from './Foo'
// import BarTab from './Bar'
/* Now, with lazy loading: */
// const HomeTab = universal(import('./Home.js'))
// const FooTab = universal(import('./Foo.js'))
// const BarTab = universal(import('./Bar.js'))
/* Now with a dynamic one */
const UniversalTab = universal(props => import(`./${props.tab}`), {
  minDelay: 750,
  loading: <div>Carregando carai...</div>,
  // loadingTransition: false, // do not show the loading
  alwaysDelay: true, // force the delay, can do CSS transitions
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'Foo', loading: false };
  }

  loadStart = () => this.setState({ loading: true });
  loadEnd = () => this.setState({ loading: false });

  render() {
    return (
      <div>
        {/* Hardcoded "routes" */}
        {/* this.state.selected === 'Home' &&
          <HomeTab /> */}
        {/* this.state.selected === 'Foo' &&
          <FooTab /> */}
        {/* this.state.selected === 'Bar' &&
          <BarTab /> */}
        {/* <UniversalTab
          tab={this.state.selected}
          isLoading={true} /> // force the loading*/}

        {this.state.loading && <p>My custom loading...</p>}
        <div className={this.state.loading ? 'loading' : ''} >
          <UniversalTab
            tab={this.state.selected}
            onBefore={this.loadStart}
            onAfter={this.loadEnd}
          />
        </div>

        <button onClick={() => this.setState({ selected: 'Home' })}>
          Home
        </button>
        <button onClick={() => this.setState({ selected: 'Foo' })}>Foo</button>
        <button onClick={() => this.setState({ selected: 'Bar' })}>Bar</button>
      </div>
    );
  }
}
