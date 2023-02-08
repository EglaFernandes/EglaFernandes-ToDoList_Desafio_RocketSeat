import styles from "./NewTask.module.css";
import { PlusCircle, Circle, CheckCircle, User  } from "phosphor-react";
import { useState } from "react";
import { Info } from "./Info";
import { Lists } from "./Lists";



export function NewTask() {
   
    const [globalCount, setGlobalCount]= useState(0)

    const [task, setTask] = useState(""); 
    const [itemsList, setItemsList] = useState([]); 

    const [itemCount, setItemCount] = useState(0)

    const [completedCount] = useState(1)

      function handleChangeInput(event) {
          const inputTask = event.target.value; 
          setTask(inputTask); 
        }


        function handleAddItemToList(event) {
             event.preventDefault(); 

            if (!task) { 
              return
            };
                
            setItemCount((state)=>{
              return state +1
             })

             setItemsList([...itemsList, task]);
             setTask(""); 
             
        }

        function deleteTask(taskToDelete){
          const tasksWithoutDeletedOne = itemsList.filter(task =>{
              return task !== taskToDelete; 
          })
  
      

          setItemsList(tasksWithoutDeletedOne);
      }

      function countGlobo(item){
        if(item === 0){
          setGlobalCount(value => value + 1 )
        } else if (item === 1) {
          setGlobalCount(value => value - 1)
        }
      }


    return(
        <div>

    <form 
    onSubmit={handleAddItemToList}
    className={styles.newTask}
    >

        <input 
        required
        onChange={handleChangeInput}
        value={task}
        placeholder=' Adicione uma nova tarefa'
        title="Campo de tarefa"
        />
        <button  type="submit" >
            <strong>Criar</strong> 
        <PlusCircle size={18} /> 
        </button>

    </form>


    <div>
          <Info  
            itemCount={itemCount} 
            completedCount={completedCount}
            globalCount={globalCount}
          />
          < Lists 
            itemsList={itemsList}  
            onDeleteTask={deleteTask}  
            globalCount={globalCount}
            countGlobo={countGlobo}
          />
    </div>
        
</div>

)
  
}

