const TransferHistory = ({history, i}) => {
    return ( 
        <>
            <br/>
            <span>{i+1}</span> &nbsp; &nbsp;
            <span>Destination Account: {history.enterDestinationAccount}</span> &nbsp; &nbsp;
            <span>Amount {history.enterAmount}</span> &nbsp; &nbsp;
            <span>Narration: {history.enterNarration}</span> &nbsp; &nbsp;
            <br/><br/>
        </>
    );
}

export default TransferHistory;