export const Home = () => {
  const goo = () => {
    console.log("jola");
  };
  return (
    <div>
      <div className="text-center align-items-center ">
        <div className="font-bold">
          <h1>texto de prueba de h1</h1>
          <button onClick={() => goo} className="btn-md bg-red-600 h-9">
            testing button
          </button>
        </div>
      </div>
    </div>
  );
};
