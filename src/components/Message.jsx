export default function Message(){

    function handleInput(){
        console.log("button clicked");
    }

    return <div><button onClick={handleInput}>Click here to show the message</button></div>
}