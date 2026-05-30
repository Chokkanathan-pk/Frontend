import REACT from React;

export default function ApiCallTwo(){

    const [apidata, setapidata]=useState([])

        const handlefetch = async ()=>{
            let  res= await fetch(api)
            let data =  await res.json()
            setapidata(data)

    }







    return(
        <div>
        <button onClick={handlefetch}>call Api</button>
        </div>
    )

}