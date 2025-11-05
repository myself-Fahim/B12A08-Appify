import { useEffect, useState } from "react"


const useApps = () => {

    const [Apps, setApps] = useState([]);


    useEffect(() => {
        fetch('Apps.json')
            .then(res => res.json())
            .then(data => setApps(data))
    }, [])

    return { Apps }

}
export default useApps