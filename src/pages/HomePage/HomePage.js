import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./HomePage.css";
const HomePage = () => {
  const [user, token] = useAuth();
  const [dogImageUrl, setDogImageUrl] = useState(null); // State to store dog image URL

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        let response = await axios.get(
          "https://localhost:5001/api/image/ByDog/11"
        );
        const imageUrl = response.data; // Assuming response.data contains the image URL

        // Update the dogImageUrl state with the fetched URL
        setDogImageUrl(imageUrl);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchDogImage(); // Call fetchDogImage when the component mounts
  }, []);

  return (
    <div>
      <div className="flex-container">
        <div className="container">
          <h3> A little about us</h3>
          <p>
            About Greatful Dog Rescue, San Diego At Greatful Dog Rescue, our
            mission is to make a difference in the lives of dogs in need and the
            loving families who welcome them into their homes. Located in the
            heart of beautiful San Diego, we are passionate about rescue,
            rehabilitation, and finding forever homes for our four-legged
            friends. Our journey began with a simple belief: every dog deserves
            a second chance. We opened our doors with the dream of creating a
            safe haven for dogs, no matter their age, breed, or circumstance.
            Over the years, we've worked tirelessly to give these loyal
            companions the love and care they deserve. With a dedicated team of
            volunteers and animal lovers, we rescue dogs from shelters, help
            those in urgent situations, and provide them with the
            medicalattention and support they need to thrive. We believe in the
            power of compassion, and we've witnessed incredible transformations
            in the dogs we've had the privilege to rescue. Our commitment to
            finding the perfect match between dogs and families is unwavering.
            We understand that every dog is unique, and we take the time to
            ensure that each adoption is a happy and lasting one. Seeing the joy
            on both the faces of our dogs and their new families is our greatest
            reward. But our work doesn't stop at adoption. Greatful Dog Rescue
            also focuses on education and outreach, spreading awareness about
            responsible pet ownership and the importance of spaying and
            neutering. We believe in creating a community where every dog has
            the opportunity to live a life filled with love, care, and
            companionship. As we continue our journey in San Diego, we invite
            you to join us in making a difference. Whether you're looking to
            adopt a new family member, volunteer your time, or support our
            cause, together, we can write countless "happily ever after" stories
            for dogs in need. Thank you for being a part of our mission to give
            dogs a brighter future. With gratitude and wagging tails, The
            Greatful Dog Rescue Team
          </p>
        </div>
        <div className="dog-of-the-week">
          <h3>Dog of the week</h3>
          
        </div>

        <div className="container">
          <h3>Volunteers</h3>
          <p>
            Volunteers are the heartbeat of any rescue organization. They bring
            with them a passion for animals and a willingness to dedicate their
            time, energy, and skills to the cause. Their contributions are
            invaluable in numerous ways. Volunteers assist with the day-to-day
            care of rescued animals, including feeding, grooming, exercising,
            and providing much-needed companionship. They also play a vital role
            in socializing and training animals, preparing them for adoption
            into loving homes. Without the dedication of volunteers, it would be
            nearly impossible for rescue organizations to provide the level of
            care and attention that every animal deserves.Beyond direct animal
            care, volunteers help with administrative tasks, fundraising
            efforts, and outreach programs. They spread awareness about
            responsible pet ownership, participate in adoption events, and even
            foster animals in their own homes. Their diverse talents and
            commitment amplify the impact of rescue organizations, ensuring that
            more animals find their forever homes and receive the love they
            deserve. Donations: Donations are the lifeblood of rescue
            organizations, providing the financial resources needed to save and
            care for animals in need. The costs associated with rescuing,
            sheltering, feeding, and providing medical care for animals can be
            substantial. Donations help cover these expenses and make it
            possible for rescue organizations to continue their lifesaving work.
            They allow for the purchase of food, bedding, toys, and medical
            supplies, ensuring that every rescued animal receives the best care
            possible. In addition to immediate needs, donations also support
            long-term goals. They enable organizations to maintain and improve
            their facilities, expand their outreach programs, and invest in
            education and advocacy efforts. Donations empower rescue
            organizations to rescue more animals, find them loving homes, and
            make a lasting impact on animal welfare. Every dollar donated brings
            us one step closer to a world where every animal is safe, loved, and
            cherished Volunteers and donations are the backbone of rescue
            organizations, enabling them to carry out their mission of saving
            and improving the lives of animals. Their combined efforts create a
            ripple effect of compassion and change, benefiting not only the
            animals but also the communities they serve
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
