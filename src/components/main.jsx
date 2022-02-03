import Form from "./form";
import Gallery from './gallery';
import { useEffect, useState } from "react";
import { fetchImages } from "../api";
import Message from "./message";

function Main() {
  const [urls, setUrls] = useState(null);
    useEffect(() =>{
      fetchImages("rice").then((urls) => {
        setUrls(urls);
      });
    }, []);

  function reloadImages(type) {
    fetchImages(type).then((urls) => {
      setUrls(urls);
    });
  }
  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls = {urls}/>
          <Message />
        </div>
      </section>
    </main>
  );
}

export default Main;