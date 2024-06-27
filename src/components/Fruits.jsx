import Fruit from "./Fruit";


export default function Fruits(){
    // const fruits=["Apple","Banana","custard apple","dry fruit"]
    const fruits=[
        {name:"Apple ",price:10,soldOut:false},
        {name:"Mango ",price:9,soldOut:false},
        {name:"Banana ",price:6,soldOut:true},
        {name:"Orange ",price:5,soldOut:true}
    ];
//     return <div><ul>{fruits.map((fruit)=>
//     <li key={fruit}>{fruit}</li>
// )}</ul></div>;
return (<div><ul>{fruits.map((fruit)=>(
    <Fruit name={fruit.name} price={fruit.price} soldOut={fruit.soldOut}/>
))}
</ul></div>);
}