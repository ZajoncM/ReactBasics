import {useEffect, useState} from 'react';
import Item from '../atoms/Item';

const List = ({number}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let arrayLength = [];
        for(let i=0;i<number;i++) { arrayLength[i] = i+1;}
        setItems(arrayLength)
    } ,[number])

    return (
        <ul className="list">
            {items.map(item => <Item key={item} id={item} />)}
        </ul>
    );
}

export default List;
