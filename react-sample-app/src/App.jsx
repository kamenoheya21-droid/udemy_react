import ColorfullMessage from './components/ColorfullMessage';
import ColofullHello from './components/ColofullHello';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <ColofullHello color="red" message="こんにちは！" />
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です！</ColorfullMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <p>クリック回数: {count}</p>
    </>
  );
}
