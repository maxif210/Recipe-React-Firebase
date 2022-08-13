
import React from 'react';
import { useEffect, useState } from "react";
import { getWebsites } from "../firebase/api";
import { WebsiteCard } from "./WebsiteCard.jsx";



export const WebsiteList = () => {
  const [websites, setWebsites] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getWebsites();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setWebsites(docs);
    // });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className='d-flex'>
      <div className=''>
      {websites.map((link) => (
        <div className="col-md-12" key={link.id}>
          <WebsiteCard link={link} />
        </div>
      ))}
      </div>
    </div>
  );
};
