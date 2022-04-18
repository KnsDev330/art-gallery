import { useEffect, useState } from "react";

const useWorks = (def = []) => {
    const [works, setWorks] = useState(def);
    useEffect(() => {
        fetch('/data/works.json')
            .then(res => res.json())
            .then(r => setWorks(r));
    }, []);
    return [works, setWorks];
}

export default useWorks;