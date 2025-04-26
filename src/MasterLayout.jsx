import Header from './others/Header';
import { Outlet } from "react-router";
import Personal_Info from './pages/Personal_Info';
import { useEffect } from 'react';


export default function MasterLayout() {

    return (
        <div className='flex flex-col gap-8 p-8'>
            <Header />
            <div className='flex gap-8 '>
                <Personal_Info />
                <Outlet />
            </div>
        </div>
    )
}