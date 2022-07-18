import { useState, useEffect } from "react";

const useFetch = (url) => {
    useEffect(() => {
        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);
    
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that resorce...")
                }
                return res.json();
            })

            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })

            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return {data, isPending, error}
}

export default useFetch;