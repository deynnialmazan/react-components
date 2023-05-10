import Button from "./Button";

function Gallery(props) {
  let isPrimary= true;

  return (
    <section className="gallery">
      <div className="container">
            <h2 className="gallery-title">{props.title}</h2>
            <p className="gallery-content">{props.content}</p>
            <div className="gallery-images">
              {props.images.map(image => (
                <div className="card">
                  <figure key={image.id}>
                    <img className="gallery-image" src={image.image} />
                  </figure>
                  <p className="gallery-description">{image.description}</p>
                </div>
              ))}
            </div>
            <div className="gallery-button">
                <Button isPrimary={isPrimary} />
            </div>
        </div>
    </section>
  )
}

export default Gallery;
