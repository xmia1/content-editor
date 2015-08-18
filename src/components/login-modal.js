import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';
import { INITIATED } from '../constants/status-types';

class LoginModal extends React.Component {
  submit() { this.props.login(this.state); }
  change(e) { this.setState({ [e.target.id]: e.target.value }); }
  handleKeyDown(e) { if(e.key === 'Enter') { this.submit(); } }
  render() {
    return this.props.loggedIn ? null :
      <section style={styles.section}>
        <h1 style={styles.heading}>Content Editor</h1>

        <input type='text'
               style={styles.input}
               placeholder='GitHub Username'
               onChange={this.change.bind(this)}
               onKeyDown={this.handleKeyDown.bind(this)}
               id='username'/>

        <input type='password'
               style={styles.input}
               placeholder='GitHub Password'
               onChange={this.change.bind(this)}
               onKeyDown={this.handleKeyDown.bind(this)}
               id='password'/>

        <button style={styles.input}
                onClick={this.submit.bind(this)}>Login</button>

      </section>;
  }
}

const styles = {
  section: {
    position: 'absolute',
    zIndex: '2',
    margin: '15% 35%',
    padding: '2%',
    boxShadow: '0 0 1px 1px #7f8c8d',
    background: '#bdc3c7'
  },

  heading: {
    textAlign: 'center',
    fontSize: '3em',
    margin: '0.1em'
  },

  input: {
    width: '100%',
    padding: '0.5em 0',
    margin: '0.5em 0',
    fontSize: '1.1em',
    textAlign: 'center'
  }
}

function mapStateToProps({ loggedIn }) {
  return { loggedIn };
}

function mapDispatchToProps(dispatch) {
  return { login: (credentials) => { dispatch(login(credentials)); } };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
