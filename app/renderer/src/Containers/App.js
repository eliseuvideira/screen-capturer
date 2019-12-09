import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    activeTab: 'image',
  };

  render() {
    return (
      <div role="main">
        <nav>
          <div className="row tab-list">
            <div className="col-6 col-medium-2 col-small-2">
              <a
                className="tab-list-item p-tabs__link active"
                aria-selected={this.state.activeTab === 'image'}
                onClick={() => this.setState({ activeTab: 'image' })}
              >
                Image
              </a>
            </div>
            <div className="col-6 col-medium-2 col-small-2">
              <a
                className="tab-list-item p-tabs__link"
                aria-selected={this.state.activeTab === 'video'}
                onClick={() => this.setState({ activeTab: 'video' })}
              >
                Video
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
