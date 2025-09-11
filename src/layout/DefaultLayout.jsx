import { Outlet } from 'react-router-dom';


const MinimalLayout = () => {
    
    return (
        <>
            <main className="content">                
                <Outlet/>
            </main>
        </>
    );
};

export default MinimalLayout;