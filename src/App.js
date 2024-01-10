import Random from './components/Random'
import Tag from './components/Tag';
import './App.css';

function App() {

  return (
    <div className="bg-gradient-to-r from-red-400 to-pink-500 items-center h-[700px]  lg:h-[1200px] " >
        <div className=" h-[20px] lg:h-[40px] ml-[40px]  lg:ml-[500px] flex items-center justify-center w-[300px] lg:w-[500px] relative top-5 bg-white rounded-md text-center ">
          <h1 className="font-bold text-[14px] ">GENERATE RANDOM GIFS OF YOUR CHOICE</h1>
        </div>

        <div>
           <Random/>

          <Tag/>
        </div>

    </div>
  );
}

export default App;
