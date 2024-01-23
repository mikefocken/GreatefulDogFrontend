import React, { useState } from "react";
import axios from "axios";
import EditAdoptionForm from "./EditAdoptionForm";

const EditAdoptionsPage = () => {
    const [adoptionApplicationId, setAdoptionApplicationId] = useState("");

    const handleEditAdoptionApplicationFormSubmit = async (adoptionApplicationId,adoptionApplicationData) => {
        try{
            if(!adoptionApplicationId){
                console.error("Adoption Application Id is required for updating")
                return;
            }
            console.log("adoptionApplicationData before sending:", adoptionApplicationData);
            const response = await axios.put(
                `https://localhost:5001/api/AdoptionApplication/${adoptionApplicationId}`, 
                adoptionApplicationData
            );

        } catch (error){
            console.error("error in updating Adoption Application")
        }

    };

    return (
        <div>
            <EditAdoptionForm onSubmit={handleEditAdoptionApplicationFormSubmit} adoptionApplicationId={adoptionApplicationId} setAdoptionApplicationId={setAdoptionApplicationId} />
        </div>
    );
};

export default EditAdoptionsPage;

