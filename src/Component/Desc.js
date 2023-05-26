const Desc = (props) => {
  return (
    <div className="mb-5">
      {props.desc.map((de) => (
        <p className="text-secondary" key={de.id}>
          {de.lode}
        </p>
      ))}
    </div>
  );
};

export default Desc;
