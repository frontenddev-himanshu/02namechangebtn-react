const Card = ({ cImg, cTitle, cPrice }) => {
  return (
    <div id="cards" className="w-70 h-90 bg-white p-2 rounded-xl">
      <div id="card-img" className="w-full h-70  rounded-t-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={cImg} alt="" />
      </div>

      <div id="title" className="mt-2 text-blue-700">
        <h5 className="font-semibold uppercase text-red- text-sm">{cTitle}</h5>
      </div>

      <div id="about" className="mt-1">
        <p className="text-l font-bold text-gray-700">${cPrice}</p>
      </div>
    </div>
  )
}

export default Card