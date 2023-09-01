export default function AvatarInput(props) {

  const handleChange = e => {
    props.onAvatarChange(e.target.value);
  }

  return (
    <fieldset>
        <legend>頭像</legend>
        <select onChange={handleChange}>
          <option value="deadTurtle">Dead turtle</option>
          <option value="black">全黑</option>
        </select>
    </fieldset>
  );
}
