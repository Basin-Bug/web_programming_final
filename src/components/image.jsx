function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src= {props.src}
            alt="Delicious Food"
            title = "これ，お好きですか？"
          />
        </figure>
      </div>
    </div>
  );
}

export default Image;