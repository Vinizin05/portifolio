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
          <div className="container m-auto p-4 py-12">
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
                  <button className="px-9 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Visualizar
                  </button>
                  <button className="px-9 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Code GitHub
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={project1} width={600} />
                <h3 className="text-2xl font-semibold mt-8">Página de Login</h3>
                <p className="text-gray-400 text-sm mt-4">
                  Página de Login Responsiva <br />
                  HTML5, CSS3, JavaScript
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-9 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Visualizar
                  </button>
                  <button className="px-9 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Code GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container m-auto p-4">
            <h2 className="text-2xl font-semibold">Projetos</h2>
            <div className="flex gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img src={project2} width={600} />
                <h3 className="text-2xl font-semibold mt-8">Jogo da Forca</h3>
                <p className="text-gray-400 text-sm mt-4">
                  layout De um Simples Jogo para se divertir <br />
                  HTML5, CSS3, JavaScript
                </p>
                <div className="flex justify-evenly mt-12">
                  <button className="px-9 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Visualizar
                  </button>
                  <button className="px-9 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Code GitHub
                  </button>
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
                  <button className="px-9 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Visualizar
                  </button>
                  <button className="px-9 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Code GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* {Tecnologias section} */}
          <section className="py-10">
            <div className="container m-auto p-4">
              <h2 className="text-2xl font-semibold">Tecnologias</h2>
              <div className="mt-14">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">HTML5</h2>
                    <p className="text-gray-500">Avançado</p>
                  </div>
                  <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">CSS3</h2>
                    <p className="text-gray-500">Avançado</p>
                  </div>
                  <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Styled-Componests</h2>
                    <p className="text-gray-500">Avançado</p>
                  </div>
                  <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Tailwind</h2>
                    <p className="text-gray-500">Avançado</p>
                  </div>
                  <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">JavaScript</h2>
                    <p className="text-gray-500">Avançado</p>
                  </div>
                  <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">TypeScript</h2>
                    <p className="text-gray-500">Avançado</p>
                  </div>
                  <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">ReactJS</h2>
                    <p className="text-gray-500">Avançado</p>
                  </div>
                  <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">NextJs</h2>
                    <p className="text-gray-500">Avançado</p>
                  </div>
                  <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
              </div>
            </div>
          </section>
          {/* {Skills Adicionais} */}
          <section>
            <div className="container m-auto px-4 py-10">
              <h2 className="text-2xl font-semibold">
                Tecnologias e Skills adicionais
              </h2>
              <div className="flex justify-between mt-12">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                    GitHub
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                    Git
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                    trabalho em equipe
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                    Aprendizagem rapida
                  </p>
                </div>
              </div>
              <div className="flex justify-around mt-8">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                    Inglês A1
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                    Foco em desenvolvimento
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5">
                    Comprometimento
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
