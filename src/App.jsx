import Spline from '@splinetool/react-spline';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <Spline scene="https://prod.spline.design/XzOQTyI3wXVmkWLL/scene.splinecode" />
      <div className='content'>
        <h1>My First Spline Scene</h1>
        <p>
          This is a simple example of how to use the Spline React component in a
          React app.
        </p>
      </div>
      <div className='watermark-cover'></div>
    </div>
  );
}
