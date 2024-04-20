import "./App.css";
import profile from "./assets/photo.png";
import profilebg from "./assets/small.png";

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
          <div className="container m-auto px-4 py-10 flex gap-6  ">
            <div>
              <h2 className="font-bold text-3xl">Olá, Eu sou Vinicius,</h2>
              <h2 className="font-bold text-3xl mt-1 gradiant-text">Frontend Developer.</h2>
              <p className="mt-4 text-gray-400">
                Sou um profissional dedicado, com conhecimento sólido em
                desenvolvimento web e habilidades técnicas bem fundamentadas.
                Com experiência anterior como QA, possuo uma compreensão
                abrangente do ciclo de vida do desenvolvimento de software. Meu 
                objetivo é aplicar minhas habilidades técnicas e conhecimento
                para contribuir efetivamente como desenvolvedor.
              </p>
            </div>
            <div className="relative">
              <img src={profile} width={520} />
              <img src={profilebg} className="absolute top-0 left-1" />
            </div>
          </div>
        </section>
      </main> 
    </>
  );
}

export default App;
