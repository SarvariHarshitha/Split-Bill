/* eslint-disable react/prop-types */

const ExpenseTable = ({ expenses }) => {
    const friends = Object.keys(expenses);

    if (friends.length === 0) {
        return <div id="expense-data" className="hide-form"><p>No expenses recorded yet.</p></div>;
    }

    return (
        <div id="expense-data" className="hide-form">
            <table border="1">
                <thead>
                    <tr>
                        <th>Friends</th>
                        {friends.map((friend) => (
                            <th key={friend}>{friend}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {friends.map((friend) => (
                        <tr key={friend}>
                            <td>{friend}</td>
                            {friends.map((otherFriend) => (
                                <td key={otherFriend}>
                                    {expenses[friend][otherFriend] || 0}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseTable;