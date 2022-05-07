import { Route, Routes } from "react-router-dom";
import PublcLayout from "../layout";
import BasicForm from "../pages/BasicForm";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<PublcLayout />} >
                    <Route path="/" element={<BasicForm />} />
            </Route>
        </Routes>
    );
}
export default AppRouter