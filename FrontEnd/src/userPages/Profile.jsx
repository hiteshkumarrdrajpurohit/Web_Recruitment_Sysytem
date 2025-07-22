import React, { useEffect, useState } from "react";
import { getProfile } from "../ApiServices/user";
import { updateProfile } from "../ApiServices/user";
import { toast } from "react-toastify";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [houseNo, setHouseNo] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [landmark, setLandmark] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const onGetProfile = async () => {
    const result = await getProfile();
    if (!result) {
      toast.error("Error while loading profile");
    } else {
      if (result["status"] == "success") {
        const {
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          phoneNumber,
          houseNo,
          streetNo,
          landmark,
          area,
          city,
          state,
          zip,
          country,
        } = result["data"];
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setPassword(password);
        setDateOfBirth(dateOfBirth);
        setPhoneNumber(phoneNumber);
        setHouseNo(houseNo);
        setStreetNo(streetNo);
        setLandmark(landmark);
        setArea(area);
        setCity(city);
        setState(state);
        setZip(zip);
        setCountry(country);
      } else {
        toast.error(result["error"]);
      }
    }
  };

  useEffect(() => {
    onGetProfile();
  }, []);

  const onUpdate = async () => {
    if (firstName.length == 0) {
      toast.warn("please enter first name");
    } else if (lastName.length == 0) {
      toast.warn("please enter last name");
    } else if (email.length == 0) {
      toast.warn("please enter email");
    } else if (password.length == 0) {
      toast.warn("please enter password");
    } else if (password !== confirmPassword) {
      toast.warn("passwords do not match");
    } else if (dateOfBirth.length == 0) {
      toast.warn("please enter date of birth");
    } else if (phoneNumber.length == 0) {
      toast.warn("please enter phone number");
    } else if (houseNo.length == 0) {
      toast.warn("please enter house number");
    } else if (streetNo.length == 0) {
      toast.warn("please enter street number");
    } else if (landmark.length == 0) {
      toast.warn("please enter the landmark");
    } else if (area.length == 0) {
      toast.warn("please enter area");
    } else if (city.length == 0) {
      toast.warn("please enter city");
    } else if (state.length == 0) {
      toast.warn("please enter state");
    } else if (zip.length == 0) {
      toast.warn("please enter zip");
    } else if (country.length == 0) {
      toast.warn("please enter country");
    } else {
      const result = await updateProfile(
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
        phoneNumber,
        houseNo,
        streetNo,
        landmark,
        area,
        city,
        state,
        zip,
        country
      );

      if (!result) {
        toast.error("Error while updating profile");
      } else {
        if (result["status"] == "success") {
          toast.success("Successfully updated profile");
        } else {
          toast.error(result["error"]);
        }
      }
    }
  };

  return (
    <div className="container">
      <h2 className="page-header">Edit Profile</h2>
      <div className="form">
        <div className="row">
          {/* First Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
                value={firstName}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
                value={lastName}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                value={email}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                value={password}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Date of Birth</label>
              <input
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                className="form-control"
                value={dateOfBirth}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Phone Number</label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className="form-control"
                value={phoneNumber}
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="">House Number</label>
              <input
                onChange={(e) => setHouseNo(e.target.value)}
                type="text"
                className="form-control"
                value={houseNo}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Street Number</label>
              <input
                onChange={(e) => setStreetNo(e.target.value)}
                type="text"
                className="form-control"
                value={streetNo}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Landmark</label>
              <input
                onChange={(e) => setLandmark(e.target.value)}
                type="text"
                className="form-control"
                value={landmark}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Area</label>
              <input
                onChange={(e) => setArea(e.target.value)}
                type="text"
                className="form-control"
                value={area}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control"
                value={city}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">State</label>
              <input
                onChange={(e) => setState(e.target.value)}
                type="text"
                className="form-control"
                value={state}
              />
            </div>

            {/* ZIP Code and Country in same row */}
            <div className="mb-3">
              <label htmlFor="">City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control"
                value={city}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">State</label>
              <input
                onChange={(e) => setState(e.target.value)}
                type="text"
                className="form-control"
                value={state}
              />
            </div>
          </div>
        </div>

        {/* Full-width Update Button */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <button onClick={onUpdate} className="btn btn-success px-4">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
