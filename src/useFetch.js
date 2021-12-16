import { useEffect, useState } from 'react';

import axios from "axios";



function useFetch(url) {



    const [info, setInfo] = useState(null);

    const [loading, setLoading] = useState(null);

    const [error, setError] = useState(null);



    useEffect(() => {

        setLoading(true);

                axios.get(url)

                .then((response) =>  {

                    let [info] = response.data.results;

                    console.log(info);

                    setInfo(info);

                })

                .catch((err) => {

                    setError(err);

                    process.exit(1);

                })

                .finally(() => { 

                    setLoading(false);

                });

    }, [url]);



    const refetch = () => {

        async function fetchData() {

            try {

                const response = await axios.get(url)

                let [info] = response.data.results;

                console.log(info);

                setInfo(info);

            } 

            catch(err) {

                    setError(err);

            } 

            finally { 

                    setLoading(false);

                };

            }

            fetchData()

    }



    return { info, loading, error, refetch }

}



export default useFetch;
