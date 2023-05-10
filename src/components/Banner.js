import Button from "./Button";

function Banner(props) {

  let isPrimary= true;

  return (
    <section className="introduction">
        <div className="container">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <div className="buttons">
              <Button isPrimary={isPrimary} />
              <Button />
            </div>
        </div>
    </section>
  )
}

export default Banner;