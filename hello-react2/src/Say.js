import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Hi!');
  const onClickLeave = () => setMessage('Bye!');

  const [color, setColor] = useState('black');
  const onClickPurple = () => setColor('purple');
  const onClickBlue = () => setColor('blue');
  const onClickGreen = () => setColor('green');

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <p style={{ color }}>{message}</p>
      <button style={{ color: 'purple' }} onClick={onClickPurple}>
        보라
      </button>
      <button style={{ color: 'blue' }} onClick={onClickBlue}>
        파랑
      </button>
      <button style={{ color: 'green' }} onClick={onClickGreen}>
        초록
      </button>
    </>
  );
};

export default Say;
