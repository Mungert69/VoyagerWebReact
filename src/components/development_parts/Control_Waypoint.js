
var PropTypes = React.PropTypes;

var BasicExample = React.createClass({
  /**
   * @return {Object}
   */
  getInitialState: function() {
    return {};
  },

  _setMessage: function(msg) {
    this.setState({ message: msg });
  },

  /**
   * @return {Object}
   */
  _renderMessage: function() {
    if (!this.state.message) {
      return;
    }

    return (
      <div className="basic-example__message">
          {this.state.message}
      </div>
    );
  },

  /**
   * @return {Object}
   */
  render: function() {
    return (
      <div className="basic-example">
        {this._renderMessage()}
        <div className="basic-example__scrollable-parent">
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__waypoint-line"/>
          <Waypoint
            onEnter={this._setMessage.bind(this, 'Waypoint entered')}
            onLeave={this._setMessage.bind(this, 'Waypoint left')}
          />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
        </div>
      </div>
    );
  }
});
  