import {useState} from 'react';
import {axios} from 'axios';

function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, email, password);
        axios.post('http://localhost:8000', {
            username: username,
            email: email,
            password: password
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return(
        <>
            <h1> Sign Up </h1>
            <form onSubmit={handleSubmit}> 
                <labe> Username: </labe>
                <input required type = 'text' value = {username} onChange = {(event) => {
                    setUsername(event.target.value);
                }} /> 
                <br/> <br/> 
                <label> Email: </label>
                <input required type='text' value={email} onChange={(event) => {
                    setEmail(event.target.value);
                }} />
                <br/> <br/> 
                <label> Password: </label>
                <input required type='password' value={password} onChange={(event) => {
                    setPassword(event.target.value);
                }} />
                <br/> <br/> 
                <button> Submit </button>
            </form>
        </>
    );
}

export default SignupForm;