import { useState } from "react";

function App() {
  // Estado para armazenar o array de tarefas
  const [tarefas, setTarefas] = useState<
    { id: number; text: string; done: boolean }[]
  >([]);

  // Estado para armazenar o texto da nova tarefa
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  // Função para adicionar uma nova tarefa
  const addTarefa = (tarefa: string) => {
    setTarefas([...tarefas, { id: Date.now(), text: tarefa, done: false }]);
  };

  // Função para salvar a nova tarefa
  const Salvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (novaTarefa.trim() !== "") {
      addTarefa(novaTarefa); // Adiciona a nova tarefa
      setNovaTarefa(""); // Limpa o input após adicionar a tarefa
    }
  };

  const removerTarefa = (tarefaId: number) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaId))
  }

  const feito = () => {
    setTarefas()
  }

  return (
    <main className="bg-slate-200 h-screen p-8">
      <div className="">
        <div>
          <h1 className="text-3xl font-bold ">Lista de tarefas</h1>

          <form onSubmit={Salvar} className="mt-4">
            <input
              className="p-1 rounded"
              onChange={(e) => setNovaTarefa(e.target.value)} // Atualiza o estado com o valor do input
              value={novaTarefa} // Associa o valor do input ao estado 'novaTarefa'
              type="text"
              placeholder="Adicione uma nova tarefa"
            />
            <button
              type="submit"
              className="bg-blue-500 border rounded p-1 text-white"
            >
              Adicionar
            </button>
          </form>
        </div>

        {tarefas.map((tarefa) => (
          <div
            key={tarefa.id}
            className="flex bg-white mt-4 p-2 rounded justify-between w-1/3 items-center"
          >
            <button 
              onClick={feito}
            >
              <p className={`line-through`}>{tarefa.text}</p>
            </button>
            <button 
              onClick={() => removerTarefa(tarefa.id)}
              className="bg-green-500 p-1 rounded text-white"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
