
export const FilterSearch=(props)=>{
    const {itemsList}=props
    const [subItemsList,setSubItemsList]=useState([])
    const inputValue=React.createRef()
    const searchItem=(filter)=> {
        let temparray=[];
        itemsList.map(item=>(
            (item.toUpperCase().indexOf(filter.toUpperCase()) ===0)?
                temparray.push(item):' '
        ))
        setSubItemsList(temparray);  
    }
    return(
        <>  
    <input 
    ref={inputValue} 
    type="text"  
    autoComplete="off"
    onChange={(e)=>searchItem(e.target.value)} 
    placeholder="Look for a Item" 
    />
        <ul>
            {subItemsList.map(item=>(
            <li onClick={()=>inputValue.current.value=item}>{item}</li>))} 
        </ul> 
        </>
    )
}
/*input{
    outline: none;
    border: none ;
    color: #B1B2BC;
    background-color:unset !important; 
    width: 100%;
  }
  ul {
    list-style-type: none;
    overflow-y: auto;
    height: 80px;
    width: 80%;
    margin-bottom: 10px;
    margin-top: 10px;
  }
   li {
    background-color: none;
    text-decoration: none;
    text-align: left;
    /* font-size: 18px; */
    /*border: none;
    color: #B1B2BC;
    display: block;
    padding: 2px;
  }
  
  li:hover:not(.header) {
    cursor: pointer;
    color:white;
  } */
