import React, { useState } from "react";
import axios from "axios";
import GlobalStyle from "./components/GlobalStyles";
import styled from "styled-components";

function App() {
    const [data, setData] = useState(null);

    const getData = () => {
        axios
            .get("api-string")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err.message));
    };

    const createPost = async () => {
        axios
            .post("api-string")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
    };
    console.log(typeof data);
    return (
        <div className="App">
            <GlobalStyle />
            <h1>AXIOS</h1>
            <Style>
                <button onClick={getData}>GET</button>
                <button onClick={createPost}>POST</button>
                <button onClick={createPost}>PATCH</button>
                <button onClick={createPost}>DELETE</button>
                <input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                ></input>
                <input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                ></input>
            </Style>
        </div>
    );
}

const Style = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        padding: 1rem;
        &:hover {
            color: white;
        }
        border-radius: 0.5rem;
        margin: 0.5rem;
    }

    margin-top: 10rem;
`;

export default App;
