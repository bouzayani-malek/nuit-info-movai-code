const Button = ({ resetGame }) => {
    return <button onClick={() => resetGame()} style={{backgroundColor:"black",width:"50%"}}>NEW TIC TAC</button>;
};

export default Button;
