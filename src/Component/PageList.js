export default function PageList(props) {
  const num = Math.ceil(props.onProduct.length / 9);
  return (
    <>
      <div className="d-flex flex-row-reverse">
        <button>{`>>`}</button>
        {num !== 0 && (
          <p className="align-middle m-0 p-1 ps-3 pe-3 bg-dark text-white">
            {num}
          </p>
        )}
        <button>{`<<`}</button>
      </div>
      <p className="d-flex flex-row-reverse text-secondary pt-1">
        Showing 1-9 of results
      </p>
    </>
  );
}
