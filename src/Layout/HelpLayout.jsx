import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="h-full bg-orange-400 pb-20">
        <div className="mx-20">
        <h2 className="flex justify-center font-bold p-6 text-4xl text-white">Website help</h2>
        <p className="flex justify-center font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, delectus.</p>

    <nav className="flex justify-center gap-10 p-8">
        <NavLink to="faq" className="text-xl font-bold bg-orange-100 p-4 rounded-xl">View FAQ</NavLink>
        <NavLink to="etc" className="text-xl font-bold bg-orange-100 p-4 rounded-xl">View Etc...</NavLink>
    </nav>

        <Outlet />
        </div>
    </div>
  )
}

export default HelpLayout