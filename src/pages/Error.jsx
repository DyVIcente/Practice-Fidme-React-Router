import { Link, NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-orange-400 h-screen">
        <h1 className="text-6xl text-white font-bold flex justify-center pt-20">404</h1>
        <h2 className="text-6xl flex justify-center text-white font-bold p-20">Page not found</h2>
        <p className="mx-20 font-semibold text-white pb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus provident, repellendus aliquam quaerat earum placeat voluptas maxime consequatur est, incidunt sunt, nostrum quasi nulla adipisci. Enim sequi itaque nesciunt.</p>
    
        <NavLink to="promos" className="flex justify-center">
            <p className="bg-orange-100 p-4 rounded-xl font-bold">Go to promos</p>
        </NavLink>
    </div>
  )
}

export default Error