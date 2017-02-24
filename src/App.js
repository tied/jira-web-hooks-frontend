import React, { Component } from 'react';
import './App.css';

//TODO: continue working through: https://facebook.github.io/react/docs/thinking-in-react.html

var WEBHOOKS = ["JIRA check", "Max number of lines check", "Commit message length check"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Introduction />
        <Description />

        <WebhookTable webhooks={WEBHOOKS}/>
        <InputWebhook />
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <h1>JIRA Webhooks</h1>
    )
  }
}

class Introduction extends Component {
  render() {
    return (
      <p className="description">
        Welcome to the JIRA Webhooks app. This app will allow you to create, update and delete webhooks.
      </p>
    )
  }
}

class Description extends Component {
  render() {
    return (
      <p className="description">
        To add your first webhook, scroll down and click "Add Webhook".
      </p>
    )
  }
}

class WebhookTable extends Component {
  render() {
    return (
      <ul className="webhooks_content">
        {this.props.webhooks.map(function(webhook) {
          return (
            <WebhookRow row={webhook}/>
          );
        })}
      </ul>
    )
  }
}

class WebhookRow extends Component {
  render() {
    return (
      <li>{this.props.row}</li>
    )
  }
}

class InputWebhook extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="webhooks_content" onSubmit={this.handleSubmit}>
        <label>
          Add a new webhook: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
