import { useState } from 'react';

export default function useListTask() {
    const getListTask = () => {
        const list = JSON.parse(localStorage.getItem("listTask"));
        if(!list){
            return [];
        }else {
            return list;
        }
    };
    const [listTask, setListTask] = useState(getListTask());
    const saveListTask = listTask => {
        var listi = getListTask();
        if(listi.length==0){
            var listToSave = listi.concat(listTask);
            localStorage.setItem("listTask", JSON.stringify(listToSave))
            setListTask(listToSave);
        } else {
            console.log("diferente")
        }
    };
    return {
        setListTask: saveListTask,
        listTask
    }
}