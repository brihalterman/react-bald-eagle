import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = useState('')

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
            // Disclaimer: we are suggesting Date.now() for now as a placeholder for unique number generation, but in the future you should not use this
        console.log(todoTitle);
        setTodoTitle("");
    };

    return (

        <form onSubmit={handleAddTodo}>

            {/* Change the component to have an open/close tag */}
            <InputWithLabel 
                AddTodoForm={AddTodoForm} 
                todoTitle={todoTitle} 
                handleTitleChange={handleTitleChange}
                // Remove the label prop 
                    // label={"Title"}
            >

                {/* Pass the text Title inside the component tags */}
                Title

            </InputWithLabel>
            <button type="submit">Add</button>
        </form>
    )
};

export default AddTodoForm;

