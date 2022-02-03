function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { type } = event.target.elements;
    props.onFormSubmit(type.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="type" defaultValue="rice">
                <option value="idly">Idly</option>
                <option value="dessert">Dessert</option>
                <option value="rice">Rice</option>
                <option value="pizza">Pizza</option>
                <option value="burger">Burger</option>
                <option value="samosa">Samosa</option>
                <option value="pasta">Pasta</option>
                <option value="butter-chicken">butter-chicken</option>
                <option value="biryani">Biryani</option>
                <option value="dosa">Dosa</option> 
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-black">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;