import { useTrip } from "./context/TripContext";


const Connect = () => {
    const {setPage,waiting} = useTrip()
    setTimeout(()=>{
        setPage(waiting)
    },2000)

    return(
        <div>
            <h1>התחברת בהצלחה</h1>
            <h3>הנך מועבר לעמוד המבוקש</h3>
        </div>
    )
};
export default Connect;
