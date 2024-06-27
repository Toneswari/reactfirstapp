// function Hello(props){
//     console.log(props);
//     // const{name,message}=props;
    
//     return(
// <div>
//     <h1>{props.message}{props.name}{props.seatNumber}</h1>
// </div>
//     );
// }
// function Hello({person}){
//     // console.log(props);
//     // const{name,message}=props;
    
//     return(
// <div>
//     <h1>{person.message}{person.name}{person.seatNumbers}</h1>
// </div>
//     );
// }
function Hello(props){
    // console.log(props);
    // const{name,message}=props;
    
    return(
<div>
    <h1>{props.person.message}{props.person.name}{props.person.seatNumbers}</h1>
</div>
    );
}
export default Hello;