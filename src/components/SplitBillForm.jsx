/* eslint-disable react/prop-types */
import Select from 'react-select';
import { useEffect, useState } from 'react';

const SplitBill = (props) => {
    const [friendOptions, setFriendOptions] = useState([]);
    const [paidFriend, setPaidFriend] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [money, setMoney] = useState("");

    const handleChange = (selectedOptions) => {
        setSelectedFriends(selectedOptions);
    };

    useEffect(() => {
        setFriendOptions(
            props.friendList
                .filter((name) => name !== paidFriend)
                .map((name) => ({ value: name, label: name }))
        );
    }, [paidFriend, props.friendList]);

    const handleSubmit = async (event) => {
        let amount = money / selectedFriends.length;
        event.preventDefault();
        let friendpaid = paidFriend;
        const selectedFriendNames = selectedFriends.map(option => option.value);
        setPaidFriend("");
        setFriendOptions([]);
        setSelectedFriends([]);
        setMoney([]);
        await props.updateExpenses(selectedFriendNames, parseFloat(amount), friendpaid);
        
    };

    return (
        <div>
            <form className="split-form hide-form" id="split-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter bill amount" 
                    value={money} 
                    name="billAmt" 
                    onChange={(event) => { setMoney(event.target.value); }}
                />
                <br/>
                <label htmlFor="friend-name">Person who paid the bill:</label>
                <select id="friend-name" value={paidFriend} onChange={(event) => { setPaidFriend(event.target.value) }}>
                    <option value = "" disabled>select a friend</option>
                    {props.friendList.map((name) => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
                <Select
                    isMulti
                    options={friendOptions}
                    onChange={handleChange}
                    value={selectedFriends}
                    placeholder="Select your friends..."
                />
                <button>Split</button>
            </form>
        </div>
    );
};

export default SplitBill;
