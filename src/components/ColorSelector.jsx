const ColorSelector = ({ color, changeColor }) => {
  return (
    <>
      <select
        onChange={(e) => changeColor(e.target.value)}
        className={`bg-${color}-50 border border-${color}-300 text-${color}-900 text-sm rounded-lg focus:ring-0 focus:border-${color}-500 focus:outline-none block w-1/6 p-2.5`}
      >
        <option value="amber">Amber</option>
        <option value="blue">Blue</option>
        <option value="cool-gray">Cool Gray</option>
        <option value="cyan">Cyan</option>
        <option value="emerald">Emerald</option>
        <option value="fuchsia">Fuchsia</option>
        <option value="gray">Gray</option>
        <option value="green">Green</option>
        <option value="indigo">Indigo</option>
        <option value="lime">Lime</option>
        <option value="orange">Orange</option>
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
        <option value="red">Red</option>
        <option value="rose">Rose</option>
        <option value="teal">Teal</option>
        <option value="true-gray">True Gray</option>
        <option value="violet">Violet</option>
        <option value="warm-gray">Warm Gray</option>
        <option value="yellow">Yellow</option>
        <option value="zinc">Zinc</option>
      </select>
    </>
  );
};

export default ColorSelector;
