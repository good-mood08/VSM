'use client'

import NavPanel from "../components/Links/NavPanel";
import Backarrow from '../components/Back_arrow';

export default function Profile(){
    const name = sessionStorage.getItem('name')
    return (
        <div>
            <header className="pt-15.5 px-7">
                <Backarrow />
                <h1>Профиль</h1>
            </header>
            <main> 
               
            </main>
            <NavPanel />
        </div>
    )
}