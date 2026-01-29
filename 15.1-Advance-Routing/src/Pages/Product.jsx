import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navi2 from './Navi2'

const Product=()=>{

    return (
        <div>
           <Navi2 />
            <div className='flex justify-center gap-5'>
                <Link to='men'>Men's </Link>
            <Link to='women'>Womens's </Link>

            </div>
            <Outlet />
        </div>
    )
}

export default Product