import "./App.css";
// import profile from "./assets/profile.jpg"

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text 2x1 font-sans">
                Vinizin Portifolio
              </h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 py-10 flex">
              <div>

              </div>
              <div>
                
              </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
