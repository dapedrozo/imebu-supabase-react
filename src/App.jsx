import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'

//navbar, footer, notfound
import NavbarMain from "./components/layouts/NavbarMain";
import Footer from "./components/layouts/Footer";
import NotFound from "./components/layouts/NotFound";

const IndexPage = lazy(() => import('./pages/IndexPage'));

const EmpleoJovenDashboard = lazy(() => import('./pages/EmpleoJovenDashboard'));
const EmpleoJovenPostulaEmpresa = lazy(() => import('./pages/EmpleoJovenPostulaEmpresa'));
const EmpleoJovenPostularEmpleados = lazy(() => import('./pages/EmpleoJovenPostularEmpleados'));

const ObservatorioPage = lazy(() => import('./pages/ObservatorioPage'));
const IndicadorEmpresarial = lazy(() => import('./components/ObservatioPage/indicadores/IndicadorEmpresarial'));
const IndicadorMacroeconomico = lazy(() => import('./components/ObservatioPage/indicadores/IndicadorMacroeconomico'));
const IndicadorMercadoLaboral = lazy(() => import('./components/ObservatioPage/indicadores/IndicadorMercadoLaboral'));
const PulsoSocial = lazy(() => import('./components/ObservatioPage/indicadores/PulsoSocial'));
const BancaPage = lazy(() => import('./pages/BancaPage'));

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));

import { GeneralContextProvider } from "./context/GeneralContext";

function App() {
  return (
    <>
    <GeneralContextProvider>
      <NavbarMain/>
        <Routes>
          <Route path="/" element={<IndexPage/>} />

          <Route path="/empleo-joven" element={<EmpleoJovenDashboard/>} />
          <Route path="/empleo-joven/postular-empresa" element={<EmpleoJovenPostulaEmpresa/>} />
          <Route path="/empleo-joven/postular-empleados" element={<EmpleoJovenPostularEmpleados/>} />

          <Route path="/banca" element={<BancaPage/>} />

          <Route path="/observatorio" element={<ObservatorioPage/>}/>
          <Route path="/observatorio/indicadores-mercado-laboral" element={<IndicadorMercadoLaboral/>} />
          <Route path="/observatorio/indicadores-macroeconomicos" element={<IndicadorMacroeconomico/>} />
          <Route path="/observatorio/pulso-social" element={<PulsoSocial/>} />
          <Route path="/observatorio/indicadores-empresariales" element={<IndicadorEmpresarial/>} />

          <Route path="/:tipoRegistro" element={<SignUpPage/>} />
          <Route path="/login" element={<SignInPage/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </GeneralContextProvider>
      
    </>
  )
}

export default App
