import Loading from "./loading";
import Image from "./image";

function Gallery(props) {
  const {urls} = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
        <div key={urls} className="column is-3">
          <Image src={urls} />
        </div>
    </div>
  );
}

export default Gallery;
