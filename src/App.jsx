import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const removeTour = (id) => {
    newTours = tours.filter((tour) => {
            return tour.id !== id})
    setTours(newTours)
  }

  const fetchData = async () => {
    setIsLoading(true)
    try{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setTours(data)
        
    } catch(err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(()=> {   
    fetchData()
  }, [])
 
  if(isLoading) {
    return <main>
      <Loading/>
    </main>
  }
 
 return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>;
};
export default App;
