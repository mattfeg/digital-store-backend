import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import RecuperarSenha from "../EsqueciASenha";

export const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="seu-caminho" element={seu componente } /> */}
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/recuperar" element={<RecuperarSenha/>}/>
            </Routes>
        </BrowserRouter>
    );
}