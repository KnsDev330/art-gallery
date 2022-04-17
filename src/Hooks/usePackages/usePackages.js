import { useEffect, useState } from "react";

const usePackages = (def = []) => {
    const [packages, setPackages] = useState(def);
    useEffect(() => {
        fetch('/data/data.json')
            .then(res => res.json())
            .then(r => setPackages(r));
    }, []);
    return [packages, setPackages];
}

export default usePackages;