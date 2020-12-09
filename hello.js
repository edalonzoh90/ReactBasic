

function Hello(){
  return <div>hello react!</div>;
}

function Button(){
  const [counter, setCounter] = useState(0);
  return <button onClick={ () => setCounter(counter+1)
    }>{counter}</button>;
}


ReactDOM.render(
    <Button />, 
                document.getElementById('mountNode'),
);

