import "./App.css";
import useFetch from "./useFetch";

function App() {

  const { info, loading, error, refetch } = useFetch("https://api.randomuser.me/");

  if (loading) return <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Loading ... </h1>;
  if (error) return console.log(error);

  return (

    <div className="flex flex-col">

      {/* Title */}
      <div className="container mx-auto px-6 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Card Generator</h1>
      </div>

      {/* Container for User */}
      <div className="flex items-center justify-center text-black font-bold">
        <div className="bg-green-800 text-white font-mono rounded-lg border shadow-lg p-16">
        <div className="grid grid-rows-3 grid-flow-col items-strech gap-24 justify-items-center">

          {/* Data Gap */}
          <div><img className="rounded-full" src={info?.picture.medium} alt="..."></img></div>
          {/* Phone */}
          <div>
            <h6 className="font-bold text-center">Phone #: </h6>
            <p>{info?.phone}</p>
          </div>

          {/* Location */}
          <div>
            <h6 className="font-bold text-center">Location: </h6>
            <p>{info?.location.country}, {info?.location.state}</p>
          </div>

          {/* Name */}
          <div>
            <h6 className="font-bold text-center">Name: </h6>
            <p>{info?.name.last}, {info?.name.first}</p>
          </div>

          {/* Userame */}
          <div>
            <h6 className="font-bold text-center">Userame: </h6>
            <p>{info?.login.username}</p>
          </div>

          {/* Email */}
          <div>
            <h6 className="font-bold text-center">Email: </h6>
            <p>{info?.email}</p>
          </div>

          {/* Data Gap */}
        </div>
      </div>
    </div>

    {/* Buttons */}

        <div className="container mx-auto text-center m-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-full" onClick={refetch}>Generate New User</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-full" >Save User</button>
        </div>

    {/* Credits */}

      <div className="container mx-auto px-6 p-6">
      <p className="text-1xl font-bold text-center text-gray-800 mb-4">This project utilizes the https://api.randomuser.me/ API to generate new users.</p>
      <p className="text-1xl font-bold text-center text-gray-800 mb-4">Built with React, Tailwind, and Axios</p>
      </div>
    </div>

  );

}



export default App;