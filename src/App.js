import React from 'react';
import Index from './components/Index';
import SiteFooter from './components/SiteFooter';

const App = React.createClass({
render() {
  return (
    <div>
      <Index />
      <SiteFooter />
    </div>
  )
}
})

export default App;
