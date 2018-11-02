import React from 'react';
import ReactDOM from 'react-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Navigation is rendering
      </div>
    )
  }
}

ReactDOM.render(<Navigation />, document.getElementById('navigation'));