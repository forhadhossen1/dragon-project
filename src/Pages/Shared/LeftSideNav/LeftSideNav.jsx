import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-semibold pb-5">All Category</h2>
            {
                categories.map(category => <NavLink className='block p-2 text-xl font-medium pl-[20%] hover:bg-slate-200 rounded-md ' key={category.id}>
                    {category.name} 
                </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;