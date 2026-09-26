interface IParams{
    current: boolean
}

function HomeLink({current}: IParams){
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.275 3.54996L4.5375 8.79996C3.4125 9.67496 2.5 11.5375 2.5 12.95V22.2125C2.5 25.1125 4.8625 27.4875 7.7625 27.4875H22.2375C25.1375 27.4875 27.5 25.1125 27.5 22.225V13.125C27.5 11.6125 26.4875 9.67496 25.25 8.81246L17.525 3.39996C15.775 2.17496 12.9625 2.23746 11.275 3.54996Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 22.4875V18.7375" stroke={current ? '#E21A1A' : 'black'} strokeWidth="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

function ScenarioLink({current}: IParams){
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 10.3125V22.5C25 26.25 22.7625 27.5 20 27.5H10C7.2375 27.5 5 26.25 5 22.5V10.3125C5 6.25 7.2375 5.3125 10 5.3125C10 6.0875 10.3125 6.7875 10.825 7.3C11.3375 7.8125 12.0375 8.125 12.8125 8.125H17.1875C18.7375 8.125 20 6.8625 20 5.3125C22.7625 5.3125 25 6.25 25 10.3125Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 5.3125C20 6.8625 18.7375 8.125 17.1875 8.125H12.8125C12.0375 8.125 11.3375 7.8125 10.825 7.3C10.3125 6.7875 10 6.0875 10 5.3125C10 3.7625 11.2625 2.5 12.8125 2.5H17.1875C17.9625 2.5 18.6625 2.8125 19.175 3.325C19.6875 3.8375 20 4.5375 20 5.3125Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 16.25H15" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 21.25H20" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

function RatingLink({current}: IParams){
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 27.5H27.5" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.1875 5V27.5H17.8125V5C17.8125 3.625 17.25 2.5 15.5625 2.5H14.4375C12.75 2.5 12.1875 3.625 12.1875 5Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.75 12.5V27.5H8.75V12.5C8.75 11.125 8.25 10 6.75 10H5.75C4.25 10 3.75 11.125 3.75 12.5Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.25 18.75V27.5H26.25V18.75C26.25 17.375 25.75 16.25 24.25 16.25H23.25C21.75 16.25 21.25 17.375 21.25 18.75Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

function ProfileLink({current}: IParams){
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1499 15.975C15.0624 15.9625 14.9499 15.9625 14.8499 15.975C12.6499 15.9 10.8999 14.1 10.8999 11.8875C10.8999 9.62498 12.7249 7.78748 14.9999 7.78748C17.2624 7.78748 19.0999 9.62498 19.0999 11.8875C19.0874 14.1 17.3499 15.9 15.1499 15.975Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.4249 24.225C21.1999 26.2625 18.2499 27.5 15 27.5C11.75 27.5 8.79995 26.2625 6.57495 24.225C6.69995 23.05 7.44995 21.9 8.78745 21C12.2125 18.725 17.8124 18.725 21.2124 21C22.5499 21.9 23.2999 23.05 23.4249 24.225Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke={current ? '#E21A1A' : 'black'} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export {HomeLink, ScenarioLink, RatingLink, ProfileLink}