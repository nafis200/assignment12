import useAdmin from "./hooks/useAdmin";



const Admin = () => {
    const [isAdmin] = useAdmin()
    return (
        <div>
            <h2 className="text-center">Hellow i am admin</h2>
            {
                isAdmin ? <button className="btn btn-primary">hellow admin</button> : <button className="btn btn-danger">You are not admin</button>
            }
        </div>
    );
};

export default Admin;