import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
    name: 'react',
  };

  render() {
    const { number, fixedNumber, name } = this.state;
    return (
      <div>
        <p>{number}</p>
        <p>바뀌지 않는 값: {fixedNumber}</p>
        <p>{name}</p>
        <button
          onClick={() => {
            this.setState((preState) => {
              return {
                number: preState.number + 1,
              };
            });

            // 위와 동일
            this.setState((preState) => ({
              number: preState.number + 1,
            }));
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState((preState) => ({
              number: preState.number + 10,
            }));
          }}
        >
          +10
        </button>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('state: ');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
