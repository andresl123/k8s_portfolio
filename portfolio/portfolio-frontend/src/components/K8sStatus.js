import { useEffect, useState } from "react";

const K8sStatus = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/api/k8s/")  // Make sure this URL is correct
            .then(response => {
                console.log("Response received:", response);
                return response.json();
            })
            .then(data => {
                console.log("Data received:", data);
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading Kubernetes info...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Kubernetes Pods</h2>
            <ul>
                {data.pods.map((pod, index) => (
                    <li key={index}>{pod.namespace} - {pod.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default K8sStatus;
