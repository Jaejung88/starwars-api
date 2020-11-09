import Axios from 'axios';
import { useState, useEffect } from 'react';

const DisplayCard = (props) => {

    const [info, setInfo] = useState([]);
    // const [error, setError] = useState("");
    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.apiCategory}/${props.id}`)
            .then(res => setInfo(res.data))
            .catch(err => console.log(err))
    }, [props])

    return(
        <>
        { props.apiCategory === "films" ?
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Title: {info.title}</div>
                    <p className="card-text">Director: {info.director}</p>
                    <p className="card-text">Producer: {info.producer}</p>
                    <p className="card-text">Release Date: {info.release_date}</p>
                </div>
            </div> :
        props.apiCategory ==="people" ? 
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Name: {info.name}</div>
                    <p className="card-text">Height: {info.height}</p>
                    <p className="card-text">Mass: {info.mass} kg</p>
                    <p className="card-text">Hair Color: {info.hair_color}</p>
                    <p className="card-text">Skin Color: {info.skin_color}</p>
                </div>
            </div> : 
        props.apiCategory ==="planets" ? 
        <div className="card">
            <div className="card-body">
                <div className="card-title">Name: {info.name}</div>
                <p className="card-text">Terrain: {info.terrain}</p>
                <p className="card-text">Surface Water: {info.surface_water}</p>
                <p className="card-text">Population: {info.population}</p>
            </div>
        </div> : 
        props.apiCategory ==="species" ? 
        <div className="card">
            <div className="card-body">
                <div className="card-title">Name: {info.name}</div>
                <p className="card-text">Classification: {info.classification}</p>
                <p className="card-text">Language: {info.language}</p>
                <p className="card-text">Avg Lifespan: {info.average_lifespan}</p>
            </div>
        </div> :
        props.apiCategory ==="starships" ? 
        <div className="card">
            <div className="card-body">
                <div className="card-title">Name: {info.name}</div>
                <p className="card-text">Model: {info.model}</p>
                <p className="card-text">Cost: {info.cost_incredits} Cred </p>
                <p className="card-text">Max Speed: {info.max_atmosphering_speed}</p>
                <p className="card-text">Passenger Capacity: {info.passengers}</p>
            </div>
        </div> :
        props.apiCategory ==="vehicles" ? 
        <div className="card">
            <div className="card-body">
                <div className="card-title">Name: {info.name}</div>
                <p className="card-text">Model: {info.model}</p>
                <p className="card-text">Vehicle Class: {info.vehicle_class}</p>
                <p className="card-text">Cost: {info.cost_in_credits} Cred</p>
                <p className="card-text">Max Speed: {info.max_atmosphering_speed}</p>
            </div>
        </div> : 
        null
        }
        </>
    );
}

export default DisplayCard;