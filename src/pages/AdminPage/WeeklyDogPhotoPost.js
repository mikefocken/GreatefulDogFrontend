const WeeklyDogPhotoPost = () => {

    const [dogDetails, setDogDetails] = useState(null);
    const [dogImages, setDogImages] = useState(null);
    const [dogId, setDogId] = useState(null);
    const handleDogIdSubmit = (id) => {
      setDogId(id);
      // You can call handleFormSubmit here or in an effect when dogId changes
      handleFormSubmit(id);
    };
  
    
    const handleFormSubmit = async (dogId) => {
      try {
        // Fetch dog details
        const detailsResponse = await axios.get(
          `https://localhost:5001/api/dogs/${dogId}`
        );
        setDogDetails(detailsResponse.data);
  
        // Fetch dog images
        const imageResponse = await axios.get(
          `https://localhost:5001/api/image/ByDog/${dogId}`
        );
        setDogImages(imageResponse.data);
      } catch (error) {
        console.error("Error fetching dog details and images:", error);
      }
    };
    





    return ( 
        <div></div>    

     );
}
 
export defaultWeeklyDogPhotoPost  ;