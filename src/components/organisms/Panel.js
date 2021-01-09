import {useState} from "react";
import Heading from '../atoms/Heading';
import Number from "../atoms/Number";
import Button from "../atoms/Button";
import List from "../molecules/List";


const Panel = () => {
    const [idleNumber, setIdleNumber] = useState(0);

    return (
        <>
            <Heading>
                Number
            </Heading>
            <Number number={idleNumber}/>
            <Button handleClick={() => setIdleNumber(idleNumber + 1)}/>
            <List number={idleNumber}/>
        </>
    );
}

export default Panel;
