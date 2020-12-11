import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={(event) => {
            this.props.handleSearchInputChange(event.target.value);
            this.setState({
              value: event.target.value
            });
          }}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
