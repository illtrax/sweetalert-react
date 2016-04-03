import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import CodeDisplay from './CodeDisplay';
import 'sweetalert/dist/sweetalert.css';
import './App.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <CodeDisplay />
        <button
          className="btn"
          onClick={() => this.setState({ show: true })}
        >
          Alert
        </button>
        <SweetAlert
          show={this.state.show}
          title="Demo Complex"
          text="SweetAlert in React"
          showCancelButton
          onConfirm={() => {
            console.log('confirm'); // eslint-disable-line no-console
            this.setState({ show: false });
          }}
          onCancel={() => {
            console.log('cancel'); // eslint-disable-line no-console
            this.setState({ show: false });
          }}
          onEscapeKey={() => this.setState({ show: false })}
          onOutsideClick={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}


export default App;
