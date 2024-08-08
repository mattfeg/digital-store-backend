import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import MeuPerfil from "../pages/MeuPerfil";

export const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/meu-perfil" element={<MeuPerfil />} />
                    
                    {/* <Route path="seu-caminho" element={seu componente } /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}