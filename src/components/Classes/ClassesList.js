import React, { useEffect, useState } from "react";
import axiosWithAuth from '../Login/utils/axiosWithAuth';
import ClassComponent from "./ClassComponent";
import initialClassesList from '../dummyData/initialClassesList';
import '../../index.css';

const ClassesList = () => {
    // const [classes, setClasses] = useState([]);
    const [classes, setClasses] = useState([]);

    // const fetchClasses = () => {
    //     return axiosWithAuth()
    //         .get("/classes")
    //         .then((res) => {
    //             return res;
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    useEffect(() => {
        // fetchClasses()
        //     .then((res) => {
        //         setClasses(res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        setClasses(initialClassesList)
    }, []);

    // const handleFetch = () => {
    //     fetchClasses()
    //         .then((res) => {
    //             setClasses(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // const handleDelete = (id) => {
    //     axiosWithAuth()
    //         .delete(`/classes/${id}`)
    //         .then((res) => {
    //             fetchClasses()
    //                 .then((res) => {
    //                     setClasses(res.data);
    //                 })
    //                 .catch((err) => {
    //                     console.log(err);
    //                 });
    //         });
    // };
    console.log(classes);
    return (
        <div className="cardHolder">
            <h1>Classes</h1>
            <div className="cards">
                {classes.map((item) => {
                    return (
                        <ClassComponent
                            classNew={item}
                            key={item.id}
                            // handleDelete={handleDelete}
                            // handleFetch={handleFetch}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ClassesList;