export default function NameInput(props) {

  const handleChange = e => {
    props.onNameChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>名稱</legend>
      <select onChange={handleChange}>
        <NameOption name="Bryanluo0614" />
        <NameOption name="⌬" />
      </select>
    </fieldset>
  );
}

function NameOption({ name }) {
  return <option value={name}>{name}</option>
}
