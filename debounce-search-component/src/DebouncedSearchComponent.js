import React , {useEffect, useState} from 'react'

const debounce=function(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(...args);
        }, delay)
    };
};
function DebouncedSearchComponent() {
    const [searchTerm, setSearchTerm]=useState("");
    const [results, setResults]=useState([]);
    const [loading, setLoading]=useState(false);

const fetchData = async (searchTerm) => {
    if (!searchTerm) {
      setResults([]); 
      return;
    }

    setLoading(true); 
    try {
     
      const response =await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`)
      const data=await response.json();

      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); 
    }
  };
    const debouncedFetchData = debounce(fetchData, 500);
    useEffect(()=>{
        debouncedFetchData(searchTerm);
    },[searchTerm]);
  return (
    <div>
        <h1>Debounced Search</h1>
        <input type="text" placeholder="Search for users..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} >
        </input>
       {loading && <p> Loading...</p>}
       <ul>
        {
            results.map((user)=>(<li key={user.id}>{user.name}</li>))
        }
       </ul>
    </div>
  )
}

export default DebouncedSearchComponent