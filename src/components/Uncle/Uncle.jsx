import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>GrandPa money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Send Money 1000 tk</button>
            <section className='flex'>
                <Cousin>Nabila</Cousin>
                <Cousin>Sabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;