import React from 'react';
import { atom, selector, useRecoilValue } from "recoil";
import axios from "axios";

const todoIdState = atom({
    key: 'todoIdState',
    default: 1
});

const todoItemQuery = selector({
    key: 'todoItemQuery',
    get: async ({get}) =>{
        const id = get(todoIdState);
        console.log(id);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(response);
        return response.data;
    }
})

function App() {

    const data = useRecoilValue(todoItemQuery);
    return (
        <div className="App">
            {data.userId}
            {data.title}
        </div>
  );
}

export default App;
