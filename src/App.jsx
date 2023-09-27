import { useState } from 'react';
import './App.css';

import Lottie from 'lottie-react';
import groovyWalkAnimation from './groovyWalk.json';

const Example = () => {
  return <Lottie animationData={groovyWalkAnimation} />;
};

function App() {
  const [count, setCount] = useState(0);

  return <></>;
}

export default Example;
