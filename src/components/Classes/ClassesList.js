import React, { useEffect, useState } from "react";
// import axiosWithAuth from '../Login/utils/axiosWithAuth';
// import ClassComponent from "./ClassComponent";
import ClassCard from '../Cards/ClassCard';
import initialClassesList from '../dummyData/initialClassesList';

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
    }, [classes]);

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
                        <ClassCard
                            classNew={item}
                            key={item.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ClassesList;