import React from 'react';
import PropTypes from 'prop-types';

export default () => {
  const DataContext = React.createContext();

  // return DataContext;

  class DataProvider extends React.Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      data: PropTypes.array.isRequired
    }

    state = { data: this.props.data };

    componentWillReceiveProps(nextProps) {
      this.setState(() => ({ data: nextProps.data }));
    }

    render() {
      return (
        <DataContext.Provider value={ this.state.data }>
          { this.props.children }
        </DataContext.Provider>
      );
    }
  }
  return {
    Provider: DataProvider,
    Consumer: DataContext.Consumer
  };
};
