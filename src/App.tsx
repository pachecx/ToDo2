import { useState } from "react";

function App() {

  const [tarefa, setTarefa] = useState<string>('')

  const Salvar = (e) => {
    e.preventDefault()
  }

  console.log(tarefa)
  
  return (
    <main className="bg-slate-200 h-screen p-8">
      <div className="">
        <div>
          <h1 className="text-3xl font-bold ">Lista de tarefas</h1>

          <form className="mt-4">
            <input
              className="p-1 rounded"
              onChange={(e) => setTarefa(e.target.value)}
              type="text"
              placeholder="Adicione uma nova tarefa"
            />
            <button type="submit" className="bg-blue-500 border rounded p-1 text-white">
              Adicionar
            </button>
          </form>
        </div>

        {tarefa.length == 0 ? (
           <div className=" bg-white mt-4 p-2 rounded justify-between w-1/3 items-center">
           <p>Adicione uma tarefa</p>
         </div>
        ):(
          <div className="flex bg-white mt-4 p-2 rounded justify-between w-1/3 items-center">
          <button>
            <p className="">Tarefa 1</p>
          </button>
          <button className="bg-green-500 p-1 rounded text-white">
            Remover
          </button>
        </div>
        )}
      </div>
    </main>
  );
}

export default App;
