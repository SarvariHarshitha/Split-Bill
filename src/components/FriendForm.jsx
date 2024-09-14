import { useState } from "react";

const FriendForm = (props) => {
    const [name,setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        props.addFriend(name);
        setName("");
    }
    return(
        <form className="friend-form hide-form" id="friend-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="friendname" value={name} onChange={handleChange}/><br/>
            <button>Add</button>
        </form>
    )
}

export default FriendForm;