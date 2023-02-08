import { Empty } from "./Empty";
import styles from "./Lists.module.css";
import { Task } from "./Task";


export function Lists({onDeleteTask, itemsList,globalCount,countGlobo}){




    if(!itemsList.length){
        return (
            <div className={styles.container}> 
                <Empty />
            </div>
        )
    }

    if(itemsList.length){
        return(
            <div className={styles.container}>
                {itemsList.map(items=>{
                    return(
                        <Task 
                        key={items} 
                        items={items} 
                        onDeleteTask={onDeleteTask}
                        globalCount={globalCount}
                        countGlobo={countGlobo}
                        />
                    )
                   })
                }
            </div>

        )
    }
  
}


