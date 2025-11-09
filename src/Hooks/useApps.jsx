import { useEffect, useState } from "react"


const useApps = () => {

    const [Apps, setApps] = useState([]);
    const [Loading,setLoading] = useState(true)
  


    useEffect(() => {
        fetch('../Apps.json')
            .then(res => res.json())
            .then(data => setApps(data))
            .finally(()=>setLoading(false))
            
    }, [])

    return { Apps,Loading}

}
export default useApps