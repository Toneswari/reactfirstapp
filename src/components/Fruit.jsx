export default function Fruit({name,price,soldOut}){
// return <div>{name}{price}</div>
return (
<div>{price>5?
            (<li><h3>{name}{price}{soldOut?"soldOut":""}</h3></li>)
        :
        ("")}
        
</div> );
    
}