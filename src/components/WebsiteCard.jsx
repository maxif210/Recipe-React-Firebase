import React from 'react';
import { deleteWebsite } from "../firebase/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export function WebsiteCard({ link }) {
  const navigate = useNavigate();

  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await deleteWebsite(id);
      toast("Link Removed Successfully", {
        type: "error",
        autoClose: 2000,
      });
    }
  };


  return (
    <div
      className="card mb-3 fw-bold card-website"
      key={link.id}
      
    >
      <div className="card-body">
        <div className="d-flex justify-content-between flex-column">
          <h4 className='text-uppercase fs-2'>{link.name}</h4>
          <p>{link.description}</p> 
        </div>

        <div className='d-flex'>
        <Link className='btn btn-secondary' to={link.url}>
          Go to Recipe Link
        </Link>
        <button onClick={() => navigate(`/edit/${link.id}`)} className='btn btn-secondary'>Editar<span role="img" aria-label="heart">📝</span></button>
        <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteLink(link.id);
            }}
          >
            Delete Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
