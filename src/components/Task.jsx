import { Trash, Circle, CheckCircle} from 'phosphor-react'
import { useState } from 'react';

import styles from './Task.module.css'



export function Task({items, onDeleteTask,countGlobo}) {

 const [toggleChange, setToggleChange] = useState({
  status: true,
  body: <Circle size={18} />,
  style: styles.sublimeTextNone
});

const [checkCount, setCheckCount] = useState(0)


const ifFalse = {
  status:false,
  body: <CheckCircle size={18} color="#5e60ce" weight="fill" />,
  style: styles.sublimeText

} 

const ifTrue = {
  status:true,
  body: <Circle size={18} />,
  style: styles.sublimeTextNone
  
} 

function handleChecked(e){
    e.preventDefault()

    switch (toggleChange.status) {
      case true:
        setToggleChange(change => change = ifFalse)
        setCheckCount(state => state = 1)
        countGlobo(checkCount);
        break;

      case false:
        setToggleChange(change => change = ifTrue)
        setCheckCount(state => state = 0)
        countGlobo(checkCount);
        break;
    
      default:
        break;
    }

} 

function handleDeleteTask(){
  console.log('deletar');

  onDeleteTask(items)

}

  return(
     
        <div key={items} className={styles.container}>
          <ul className={styles.task} >
             <li className={styles.circle} onClick={handleChecked}><a>{toggleChange.body}</a></li>
             <li onClick={handleChecked} className={ toggleChange.style} >
              <p>{items}</p>
               
             </li>
             <li><button onClick={handleDeleteTask} title='Deletar tarefa' className={styles.trash}><Trash size={18}  /></button></li>
          </ul>
         </div>
    
  )
  
}
