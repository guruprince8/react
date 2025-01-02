import {useState,useEffect} from 'react';

/**
 *
 * @param url
 * @param initialValue
 * @returns result
 */
export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);
    useEffect(()=> {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setResult(data);
            })  ;
    },[]);
    return result
}