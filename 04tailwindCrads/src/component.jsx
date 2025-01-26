function Card({ cardImg, cardTitle, cardDiscription }) {
  return (
    <>
      <div
        id="card"
        className="bg-white w-90 h-95  rounded-xl cursor-pointer hover: transition duration-500 ease-in-out hover:scale-108"
      >
        <img
          id="img"
          className="w-full h-50 object-cover rounded-xl mb-5"
          src={cardImg}
          alt="Cartoon"
        />
        <h1 id="title" className="text-xl text-black font-bold ">
          {cardTitle}
        </h1>
        <p id="discripition" className="text-black">
          {cardDiscription}
        </p>
      </div>
    </>
  );
}

export default Card;
