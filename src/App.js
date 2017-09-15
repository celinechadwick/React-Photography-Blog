import React from 'react';
import Nav from './components/Nav';
import Index from './components/Index';
import Footer from './components/Footer';

const App = React.createClass({
render() {
  return (
    <div>
      <Nav />
      <Index />
      <Footer />
    </div>
  )
}
})

export default App;
