import Header from './others/Header';
import { Outlet } from "react-router";
import Personal_Info from './pages/Personal_Info';
import { useEffect } from 'react';


export default function MasterLayout() {

    return (
        <div className='p-8'>
            <Header />
            <div className='flex items-start my-8 rounded-3xl gap-8 '>
                <aside className=''>
                    <Personal_Info />
                </aside>

                <Outlet />
            </div>
        </div>
    )
}