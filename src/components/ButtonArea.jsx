import { useState, useEffect } from "react";

const ButtonArea = () => {
    const [visibility, setVisibility] = useState({
        friend: false,
        bill: false,
        expense:false
    });

    const handleClick = (event) => {
        if (event.target.name === "friend") {
            setVisibility(prevValue => ({
                friend: !prevValue.friend,
                bill: false,
                expense:false
            }));
        } else if(event.target.name === "bill"){
            setVisibility(prevValue => ({
                friend: false,
                bill: !prevValue.bill,
                expense:false
            }));
        } else{
            setVisibility(prevValue => ({
                friend: false,
                bill: false,
                expense: !prevValue.expense
            }));
        }
    };

    useEffect(() => {
        if (visibility.friend) {
            document.getElementById("friend-form").classList.remove("hide-form");
            document.getElementById("split-form").classList.add("hide-form");
            document.getElementById("expense-data").classList.add("hide-form");
        } else if (visibility.bill) {
            document.getElementById("friend-form").classList.add("hide-form");
            document.getElementById("split-form").classList.remove("hide-form");
            document.getElementById("expense-data").classList.add("hide-form");
        } else if(visibility.expense){
            document.getElementById("friend-form").classList.add("hide-form");
            document.getElementById("split-form").classList.add("hide-form");
            document.getElementById("expense-data").classList.remove("hide-form");
        }
        else {
            document.getElementById("friend-form").classList.add("hide-form");
            document.getElementById("split-form").classList.add("hide-form");
            document.getElementById("expense-data").classList.add("hide-form");
        }
    }, [visibility]);

    return (
        <div className="button-area">
            <button className="addFriend area-button" name="friend" onClick={handleClick}>Add a Friend</button>
            <button className="splitBill area-button" name="bill" onClick={handleClick}>Split a bill</button>
            <button className="area-button" name="expense" onClick={handleClick}>Show the expenses</button>
        </div>
    );
};

export default ButtonArea;