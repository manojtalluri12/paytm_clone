
const FormComponent=({params})=>{
    const {type,option}=params;
   // const [element,setElement]=useState("")
   let formElement="";
    switch(type){
        case "text":
           formElement= <input type={type}/>
            break
        case "select":
           formElement= <select>
                {
                    option.length >0 && option.map((ele)=>{
                        return <option value={ele.value}>{ele.label}</option>
                    })
                }
            </select>    
            break;
        case "password":
           formElement= <input type={type}/> 
            break;   

    }
    return formElement
}
export default FormComponent