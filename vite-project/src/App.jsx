import "./App.css";
import profile from "./assets/profile.png";
import profilebg from "./assets/small.png";
import project from "./assets/project.png";
import project1 from "./assets/SecondProject.png";
import project2 from "./assets/thirdproject.png";

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
              <h2 className="font-bold text-3xl mt-1 gradiant-text">
                Frontend Developer.
              </h2>
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
              <img src={profile} width={520} className="relative z-10" />
              <img src={profilebg} className="absolute top-1 left-2 z-5" />
            </div>
          </div>
        </section>
        {/* {Projects section} */}
        <section>
          <div className="container m-auto p-4">
            <h2 className="text-2xl font-semibold">Projetos</h2>
            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img src={project} width={600} />
                <h3 className="text-2xl font-semibold mt-8">
                  Controle Financeiro
                </h3>
                <p className="text-gray-400 text-sm mt-4">
                  layout para controle de despesas e recebimentos <br />
                  RectJs, JS, Styled-Components
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Visualizar</button>
                  <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">Code GitHub</button> 
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={project1} width={600} />
                <h3 className="text-2xl font-semibold mt-8">
                  Página de Login
                </h3>
                <p className="text-gray-400 text-sm mt-4">
                  Página de Login Responsiva <br />
                  HTML5, CSS3, JavaScript
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Visualizar</button>
                  <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">Code GitHub</button> 
                </div>
              </div>
            </div>
          </div>
          <div className="container m-auto p-4">
            <h2 className="text-2xl font-semibold">Projetos</h2>
            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img src={project2} width={600} />
                <h3 className="text-2xl font-semibold mt-8">
                  Jogo da Forca
                </h3>
                <p className="text-gray-400 text-sm mt-4">
                  layout De um Simples Jogo para se divertir <br />
                  HTML5, CSS3, JavaScript
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Visualizar</button>
                  <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">Code GitHub</button> 
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={project1} width={600} />
                <h3 className="text-2xl font-semibold mt-8">
                  Controle Financeiro
                </h3>
                <p className="text-gray-400 text-sm mt-4">
                  Página de Login Responsiva <br />
                  HTML5, CSS3, JavaScript
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Visualizar</button>
                  <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">Code GitHub</button> 
                </div>
              </div>
            </div>
          </div>
          {/* {Tecnologias section} */}
          <section>

          </section>
        </section>
      </main>
    </>
  );
}

export default App;
