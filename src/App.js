import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.setSha = this.setSha.bind(this)
    this.state = {
      sha: ''
    }
  }

  setSha(e) {
    this.setState({ sha: e.target.value })
  }

  error() {
    if (this.state.sha === '') return false;
  }

  renderSha() {
    if (this.state.sha === '' || this.error()) return null;
    return <div>
      <p>Copy the following code below to paste in your <strong>jupyter_notebook_config.py</strong> file</p>
      <pre>
        <code>
          c = get_config()<br/>
          c.NotebookApp.certfile = u'/home/ec2-user/ssl/cert.pem'<br/>
          c.NotebookApp.keyfile = u'/home/ec2-user/ssl/cert.key'<br/>
          c.IPKernelApp.pylab = 'inline'<br/>
          c.NotebookApp.ip = '*'<br/>
          c.NotebookApp.open_browser = False<br/>
          c.NotebookApp.password = '{this.state.sha}'<br/>
        </code>
      </pre>
    </div>
  }

  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1>Jupyter config generator</h1>
          <p>Paste your <strong>sha:345arga...</strong> code into the text field below.</p>
          
          <div className='form-group'>
            <label>SHA Code</label> 
            <input 
              type='text' 
              className='form-control' 
              defaultValue={this.state.sha}
              onChange={this.setSha} />
          </div>

        </div>
        {this.renderSha()}
      </div>
    );
  }
}

export default App;
