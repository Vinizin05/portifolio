import "./App.css";
import profile from "./assets/profile.png";
import profilebg from "./assets/small.png";
import project from "./assets/project.png";
import project1 from "./assets/SecondProject.png";
import project2 from "./assets/thirdproject.png";
import project3 from "./assets/Projectfour.png";
import Facebook from "./assets/facebook.svg";
import Linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text 2x1 font-sans">
                Vinicius Rodrigues Varela
              </h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Projetos
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Tecnologias
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Sobre mim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 pt-12 sm:py-32 flex flex-col sm:flex-row gap-6  ">
            <div>
              <h2 className="font-bold text-3xl">Olá, Eu sou Vinicius,</h2>
              <h2 className="font-bold text-3xl mt-1 gradiant-text running-text">
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
              <img
                src={profile}
                className="relative z-10 w-[220px] m-auto sm:w-[520px]"
              />
              <img
                src={profilebg}
                className="relative -top-[160px] left-[50px] w-[180px] m-auto sm:w-[220px]"
              />
            </div>
          </div>
        </section>
        {/* {Projects section} */}
        <section>
          <div className="container m-auto p-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projetos</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={project} width={600} />
                <h3 className="text-2xl font-semibold mt-8">
                  Controle Financeiro
                </h3>
                <p className="text-gray-400 text-sm mt-4">
                  layout para controle de despesas e recebimentos <br />
                  RectJs, JS, Styled-Components
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Visualizar
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Code GitHub
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={project1} width={600} />
                <h3 className="text-2xl font-semibold mt-8">Página de Login</h3>
                <p className="text-gray-400 text-sm mt-4">
                  Página de Login Responsiva <br />
                  HTML5, CSS3, JavaScript
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Visualizar
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Code GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container m-auto p-4">
          <div className="flex flex-col sm:flex-row gap-10 mt-11">
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={project2} width={600} />
              <h3 className="text-2xl font-semibold mt-8">Jogo da Forca</h3>
              <p className="text-gray-400 text-sm mt-4">
                layout De um Simples Jogo para se divertir <br />
                HTML5, CSS3, JavaScript
              </p>
              <div className="flex mt-12 gap-2">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Visualizar
                </button>
                <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                  Code GitHub
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={project3} width={600} />
              <h3 className="text-2xl font-semibold mt-8">portfólio</h3>
              <p className="text-gray-400 text-sm mt-4">
                Portfólio responsivo <br />
                ReactJs, ViteJS, JavaSript, Tailwind
              </p>
              <div className="flex mt-12 gap-2">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Visualizar
                </button>
                <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20  justify-between mt-12">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  GitHub
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  trabalho em equipe
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Aprendizagem rapida
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 justify-around mt-4 sm:mt-8">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Inglês A1
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Foco em desenvolvimento
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Comprometimento
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Sobre mim</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-20 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>Curso de Informática</p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>Curso de Inglês</p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>Curso de Design Grafico</p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>Curso de Programação</p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>Curso de Programação (ELITI)</p>
              </div>
              <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>
                  Analista de Garantia de Qualidade (QA): Teste de Integração:
                  Utilizei o Postman para testar as rotas da API, garantindo a
                  integridade e o funcionamento correto dos endpoints.
                  Monitoramento de Erros: Utilizei a AWS para verificar logs de
                  erros, identificando e solucionando problemas de forma
                  eficiente e proativa. Análise de Dados: Utilizei o Redash e
                  consultas SQL para monitorar e garantir a qualidade dos
                  retornos para os clientes, contribuindo para a otimização dos
                  processos e a satisfação do cliente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @Vinizin 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Linkedin} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
