import React from 'react';
import QAPair from "./QAPair";
import Modal from '@material-ui/core/Modal';

export default function HistoryModal(props){
    let historyArr = [];
    for (let step=0;step<props.history.length;step++){
        historyArr.push(<QAPair response={props.history[step]} color={props.getResponseColor(props.history[step])}/>)
    }
    const body=(
        <div className='modal'>
            {historyArr}
            <button onClick={props.toggle}>Close</button>
            <button onClick={props.clear}>Clear history</button>
        </div>
    )
    return(
        <Modal open={props.open} onClose={props.toggle}><p>{body}</p></Modal>
    )
}
