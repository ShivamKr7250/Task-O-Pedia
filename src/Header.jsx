
function MainHeader() {
    const whatWeWillLearn = "React JS"
    return (
        <h1 className='heading1'>Learning {whatWeWillLearn}</h1>
    )
}

const styleSubHeader = {
    color: "blueviolet",
    backgroundColor: "lightgray",
};

function SubHeader() {
    return (
        <p style={styleSubHeader}>It will be Exciting Journey</p>
    )
}

export default function Header() {
    return (
        <div>
            <MainHeader />
            <SubHeader />
        </div>
    )
}