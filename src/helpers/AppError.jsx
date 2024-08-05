export const AppError = ({msg}) => {
    return (
        <div className="error flex flex-col items-center m-auto">
            <img src="https://media.tenor.com/NapSP2EQjsgAAAAi/swelters-mistake.gif" alt="wrong" width={250}/>
            <h2 className="text-2xl text-green-dark dark:text-white">{msg}</h2>
        </div>
    )
}