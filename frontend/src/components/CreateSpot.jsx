import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSpot, createPreviewImg, createSpotImg } from '../store/spots';
import './CreateSpot.css'

const CreateSpotForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sessionUser = useSelector(state => state.session.user);
            const [country, setCountry] = useState('');
            const [address, setAddress] = useState('');
            const [city, setCity] = useState('');
            const [state, setState] = useState('');
            const [lat, setLatitude] = useState('');
            const [lng, setLongitude] = useState('');
            const [description, setDescription] = useState('');
            const [name, setName] = useState('');
            const [price, setPrice] = useState('');
            const [previewImg, setPreviewImg] = useState('');
            const [spotImg1, setSpotImg1] = useState('');
            const [spotImg2, setSpotImg2] = useState('');
            const [spotImg3, setSpotImg3] = useState('');
            const [spotImg4, setSpotImg4] = useState('');
            const [hasSubmitted, setHasSubmitted] = useState(false)
            const [ errors, setErrors ] = useState({})


            const updateCountry = (e) => setCountry(e.target.value);
            const updateAddress = (e) => setAddress(e.target.value);
            const updateCity = (e) => setCity(e.target.value);
            const updateState = (e) => setState(e.target.value);
            const updateLatitude = (e) => setLatitude(e.target.value);
            const updateLongitude = (e) => setLongitude(e.target.value);
            const updateDescription = (e) => setDescription(e.target.value);
            const updateName = (e) => setName(e.target.value);
            const updatePrice = (e) => setPrice(e.target.value);
            const updatePreview = (e) => setPreviewImg(e.target.value);
            const updateSpotImg1 = (e) => setSpotImg1(e.target.value);
            const updateSpotImg2 = (e) => setSpotImg2(e.target.value);
            const updateSpotImg3 = (e) => setSpotImg3(e.target.value);
            const updateSpotImg4 = (e) => setSpotImg4(e.target.value);


                    useEffect(() => {
                        const errors = {};

                        if (!country) errors.country = 'Country is required';
                        if (!address) errors.address = 'Address is required';
                        if (!city) errors.city = 'City is required';
                        if (!state) errors.state = 'State is required';
                        if (!lat) errors.lat = 'Latitude is required';
                        if (!lng) errors.lng = 'Longitude is required';
                        if (!description || description && description.length < 30) errors.description = 'Description needs a minimum length of 30 characters';
                        if (!name) errors.name = 'Name is required';
                        if (!price) errors.price = 'Price is required';
                        if (!previewImg) errors.previewImg = 'Preview image is required';
                        if (spotImg1 && (!spotImg1.endsWith('.png') && !spotImg1.endsWith('.jpg') && !spotImg1.endsWith('.jpeg'))) errors.spotImg1 = 'Image URL must end in .png, .jpg, or .jpeg';
                        if (spotImg2 && (!spotImg2.endsWith('.png') && !spotImg2.endsWith('.jpg') && !spotImg2.endsWith('.jpeg'))) errors.spotImg2 = 'Image URL must end in .png, .jpg, or .jpeg';
                        if (spotImg3 && (!spotImg3.endsWith('.png') && !spotImg3.endsWith('.jpg') && !spotImg1.endsWith('.jpeg'))) errors.spotImg3 = 'Image URL must end in .png, .jpg, or .jpeg';
                        if (spotImg4 && (!spotImg4.endsWith('.png') && !(spotImg4.endsWith('.jpg')) && !spotImg4.endsWith('.jpeg'))) errors.spotImg4 = 'Image URL must end in .png, .jpg, or .jpeg';
                        setErrors(errors)

                      }, [country, address, city, state, lat, lng, description, name, price, previewImg, spotImg1, spotImg2, spotImg3, spotImg4])

    if (sessionUser) {
        const {id} = sessionUser


        const handleSubmit = async (e) => {
            e.preventDefault();
            setHasSubmitted(true);

            if (Object.values(errors).length) {
                return
            }

            const spotPayload = {
                ownerId: id,
                country,
                address,
                city,
                state,
                lat: Number(lat),
                lng: Number(lng),
                description,
                name,
                price: Number(price)
              }

              // dispatch(createSpot(spotPayload)).then((res) =>{
              //   navigate(`/spots/${res.id}`)
              // })

              let createdSpot = await (dispatch(createSpot(spotPayload)))

              if (createdSpot) {
                const id = createdSpot.id;

                const previewPayload = {
                  spotId: id,
                  url: previewImg,
                  preview: true
                }

                // await (dispatch(createPreviewImg(previewPayload)));

              dispatch(createPreviewImg(previewPayload)).then(()=> {
                let spotImages = [spotImg1, spotImg2, spotImg3, spotImg4]
                 for (const spotImg of spotImages) {
                   if (spotImg.length !== 0) {
                    const imgPayload = {
                      spotId: id,
                      url: spotImg,
                      preview: false
                  }
                      dispatch(createSpotImg(imgPayload))
                   }
                 }}).then(() =>{
                navigate(`/spots/${id}`)
              })

            }
            setHasSubmitted(false);
            setCountry("");
            setAddress("");
            setCity("");
            setState("");
            setLatitude("");
            setLongitude("");
            setDescription("");
            setName("");
            setPrice("");
            setPreviewImg("");
            setSpotImg1("")
            setSpotImg2("")
            setSpotImg3("");
            setSpotImg4("")
        }

        return (
            <section className="form-container">
              <form className="create-spots-form" onSubmit={handleSubmit}>
                <h2>Create a new Spot</h2>
                <label>
                    <h3>Where&apos;s your place located?</h3>
                    <p>Guests will only get your exact address once they book a reservation.</p>
                    Country {hasSubmitted=== true && errors.country && <span className="errors">{errors.country}</span>}
                <br></br>
                <input
                  type="country"
                  className="input-box"
                  placeholder="Country"
                  value={country}
                  onChange={updateCountry} />
                  </label><br></br>
                <label>
                    Street Address {hasSubmitted=== true && errors.address && <span className="errors">{errors.address}</span>}
                <br></br>
                <input
                  type="address"
                  className="input-box"
                  placeholder="Address"
                  value={address}
                  onChange={updateAddress} />
                  </label>
                  <br></br>
                <label>
                    City {hasSubmitted=== true && errors.city && <span className="errors">{errors.city}</span>}
                <br></br>
                <input
                  type="city"
                  className="input-box"
                  placeholder="City"
                  value={city}
                  onChange={updateCity} />
                  </label>
                  <br></br>
                  <label>
                    State
                    {hasSubmitted=== true && errors.state && <span className="errors">{errors.state}</span>}
                <br></br>
                <input
                  type="city"
                  className="input-box"
                  placeholder="STATE"
                  value={state}
                  onChange={updateState} />
                  </label>
                  <br></br>
                <label>
                    Latitude {hasSubmitted=== true && errors.lat && <span className="errors">{errors.lat}</span>}
                <br></br>
                <input
                  type="latitude"
                  className="input-box"
                  placeholder="Latitude"
                  value={lat}
                  onChange={updateLatitude} />
                  </label>
                  <br></br>
                <label>
                    Longitude {hasSubmitted=== true && errors.lng && <span className="errors"> {errors.lng}</span>}
                <br></br>
                <input
                  type="longitude"
                  className="input-box"
                  placeholder="Longitude"
                  value={lng}
                  onChange={updateLongitude} />
                  </label>
                  <br></br>
                <label>
                    <h3>Describe your place to guests</h3>
                    <p>Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                <textarea
                  placeholder='Please write at least 30 characters'
                  className="description-box"
                  value={description}
                  onChange={updateDescription}>
                </textarea>
                  </label>
                  {hasSubmitted=== true && errors.description && <span className="errors">{errors.description}</span>}
                <label>
                    <h3>Create a title for your spot</h3>
                    <p>Catch guests&apos; attention with a spot title that highlights what makes your place special.</p>
                <input
                  type="text"
                  placeholder="Name of your spot"
                  className="input-box"
                  value={name}
                  onChange={updateName} />
                  </label>
                  <br></br>
                {hasSubmitted=== true && errors.name && <span className="errors">{errors.name}</span>}
                <label>
                    <h3>Set a base price for your spot</h3>
                    <p>Competitive pricing can help your listing stand out and rank higher in search results</p>
                $ <input
                  type="text"
                  className="price-input-box"
                  placeholder="Price per night (USD)"
                  value={price}
                  onChange={updatePrice} />
                  </label>
                  <br></br>
                {hasSubmitted=== true && errors.price && <span className="errors">{errors.price}</span>}
                <label>
                    <h3>Liven up your spot with photos</h3>
                    <p>Submit a link to at least one photo to publish your spot.</p>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Preview Image URL"
                  value={previewImg}
                  onChange={updatePreview} />
                {hasSubmitted=== true && errors.previewImg && <span  className="errors">{errors.previewImg}</span>}
                <br></br>
                <br></br>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Image URL"
                  value={spotImg1}
                  onChange={updateSpotImg1} />
                {hasSubmitted=== true && errors.spotImg1 && <span className="errors">{errors.spotImg1}</span>}
                <br></br>
                <br></br>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Image URL"
                  value={spotImg2}
                  onChange={updateSpotImg2} />
                {hasSubmitted=== true && errors.spotImg2 && <span className="errors">{errors.spotImg2}</span>}
                <br></br>
                <br></br>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Image URL"
                  value={spotImg3}
                  onChange={updateSpotImg3} />
                {hasSubmitted=== true && errors.spotImg13 && <span className="errors">{errors.spotImg3}</span>}
                <br></br>
                <br></br>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Image URL"
                  value={spotImg4}
                  onChange={updateSpotImg4} />
                {hasSubmitted=== true && errors.spotImg4 && <span className="errors">{errors.spotImg4}</span>}
                  </label>
                  <br></br>
                  <br></br>
                <div className={`input-container`}>
                <button onClick={handleSubmit} className={`create-spot-button`}type="submit">Create Spot</button>
                </div>
              </form>
            </section>
          );
    } else {
      navigate(`/`)
    }

}

export default CreateSpotForm;
