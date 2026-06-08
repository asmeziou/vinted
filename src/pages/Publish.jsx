import { useState } from "react";
import axios from "axios";

const Publish = (props) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  // token en "dur", pour l'exemple, mais en général récupéré des cookies :
  const userToken = props.token;

  return (
    <section>
      <div className="container">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("picture", file);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("condition", condition);
            formData.append("city", city);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);

            // formData.append("picture", file);
            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                  headers: {
                    Authorization: "Bearer " + userToken,
                  },
                },
              );

              alert(JSON.stringify(response.data));
            } catch (err) {
              if (err.response.status === 500) {
                console.error("An error occurred");
              } else {
                console.error(err.response.data.msg);
              }
            }
          }}
        >
          <label>Title:</label>
          <input
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
          <label>Description:</label>
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          />
          <label>Price:</label>
          <input
            type="number"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
          />
          <label>Condition:</label>
          <input
            type="text"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
            value={condition}
          />
          <label>City:</label>
          <input
            type="text"
            onChange={(event) => {
              setCity(event.target.value);
            }}
            value={city}
          />
          <label>Brand:</label>
          <input
            type="text"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            value={brand}
          />
          <label>Size:</label>
          <input
            type="number"
            onChange={(event) => {
              setSize(event.target.value);
            }}
            value={size}
          />
          <label>Couleur:</label>
          <input
            type="text"
            onChange={(event) => {
              setColor(event.target.value);
            }}
            value={color}
          />

          <input
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />

          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Publish;
