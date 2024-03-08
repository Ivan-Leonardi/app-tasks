import "./AddTask.scss";

import { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import { FaPlus } from "react-icons/fa";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para ser adicionada!"
                );
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });

            await fetchTasks();

            setTask("");

            alert.success("A tarefa foi adiconada com sucesso!");
        }  (error) {
            alert.error("Algo deu errado.");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
};
export default AddTask;
