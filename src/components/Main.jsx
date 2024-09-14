import ButtonArea from "./ButtonArea";
import FriendForm from "./FriendForm";
import SplitBill from "./SplitBillForm";
import ExpenseTable from "./ExpenseTable";
import {useEffect, useState } from "react";

const Main = () => {
    const [friend, setFriend] = useState(
        () => JSON.parse(localStorage.getItem("friends")) || []
    );
    const [expense, setExpense] = useState(
        () => JSON.parse(localStorage.getItem("expense")) || {}
    );

    const addFriend = (name) => {
        setFriend((prevValue) => [...prevValue, name]);

        setExpense((prevValue) => {
            const newExpense = { ...prevValue };
            newExpense[name] = {};
            Object.keys(newExpense).forEach((friend) => {
                if (friend !== name) {
                    newExpense[friend][name] = 0;
                    newExpense[name][friend] = 0;
                }
            });
            return newExpense;
        });
    };

    useEffect(() => {
        localStorage.setItem("friends", JSON.stringify(friend));
    },[friend]);
    useEffect(() => {
        localStorage.setItem("expense", JSON.stringify(expense));
    },[expense]);



    const updateExpenses = (selectedFriends, money, paidFriend) => {
        setExpense((prevExpenses) => {
            const newExpenses = { ...prevExpenses };

            selectedFriends.forEach((friend) => {
                newExpenses[friend][paidFriend] += money;
            });

            return newExpenses;
        });
    };


    return (
        <div>
            <ButtonArea />
            <FriendForm addFriend={addFriend} />
            <SplitBill friendList={friend} updateExpenses={updateExpenses} />
            <ExpenseTable expenses={expense} />
        </div>
    );
};

export default Main;
