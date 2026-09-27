'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useHistory } from '../context/HistoryProvider';

export default function Backarrow(){
    const {previousPath} = useHistory();
    
    if(previousPath) return (
        <Link href={previousPath.toString()}>
            <Image 
                src={'/svg/back-arrow.svg'}
                width={42}
                height={42}
                alt='back-arrow'
            />
        </Link>
    )
    else return (
        <Image 
            src={'/svg/back-arrow.svg'}
            width={42}
            height={42}
            alt='back-arrow'
        />
    )
}