const Button = ({ btn, link }) => {
  return (
    <a href={link} id="button" className="text-white bg-amber-300 font-medium rounded-sm hover:scale-105 hover:bg-gray-400 duration-400">
      {btn}
    </a>
  )
}

export default Button