import React from 'react';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveWebsite, getWebsite, updateWebsite } from "../firebase/api";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  url: "",
  name: "",
  description: "",
};
export const WebsiteForm = (props) => {
  const [website, setWebsite] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) =>
    setWebsite({ ...website, [name]: value });

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validURL(website.url))
      return toast("invalid url", { type: "warning", autoClose: 1000 });

    if (!params.id) {
      await saveWebsite(website);
      toast("New Link Added", {
        type: "success",
      });
    } else {
      await updateWebsite(params.id, website);
      toast("Updated", {
        type: "success",
      });
    }

    // Clean Form
    setWebsite(initialState);
    navigate("/");
  };

  const getLinkById = async (id) => {
    try {
      const doc = await getWebsite(id);
      setWebsite({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getLinkById(params.id);
    }
  }, [params.id]);

  return (
    <div className="col-md-4 offset-md-4">
      <form onSubmit={handleSubmit} className="card card-body bg-secondary">
        <label htmlFor="url">Recipe Link</label>
        <div className="input-group mb-3">
          <div className="input-group-text bg-dark">
            <span role="img" aria-label="title">🔗</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="https://someurl.xyz"
            value={website.url}
            name="url"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="name">Recipe Name:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
          <span role="img" aria-label="title">🍲</span>
          </div>
          <input
            type="text"
            value={website.name}
            name="name"
            placeholder="Website Name"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="description">Write a Description:</label>
        <textarea
          rows="3"
          className="form-control mt-3"
          placeholder="Write a Description"
          name="description"
          value={website.description}
          onChange={handleInputChange}
        ></textarea>

        <button
          className="btn btn-primary btn-block mt-3"
          disabled={!website.url || !website.name}
        >
          {props.currentId === "" ? "Save" : "Update"}
        </button>
      </form>
    </div>
  );
};
