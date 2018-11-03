import React from 'react';
import ReactDOM from 'react-dom';
import { TopBar } from './components/TopBar.jsx';

const divStyle = {
  boxSizing: "border-box",
  height: "81px",
  width: "100%",
  display: "block",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={divStyle}>
        <header>
            <TopBar />
        </header>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('topbar'));