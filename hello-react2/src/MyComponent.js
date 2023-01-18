import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <>
        <h3>Hi, {name}!</h3>
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </>
    );
  }
}
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <>
//       <h1>Hello, {name}</h1> <br />
//       children 값은 {children}입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
