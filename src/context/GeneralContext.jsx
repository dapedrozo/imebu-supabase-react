import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";
import { AuthInvalidCredentialsError, AuthRetryableFetchError } from "@supabase/supabase-js";

export const GeneralContext = createContext();

export function GeneralContextProvider(props) {
    const useSessionStorage = (storageKey, fallbackState="") => {
      const [value, setValue] = useState(
        JSON.parse(sessionStorage.getItem(storageKey)) ?? fallbackState
          );
          useEffect(() => {
            sessionStorage.setItem(storageKey, JSON.stringify(value));
          }, [value, storageKey]);
          return [value, setValue];
    };

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const [sendingLogin, setSendingLogin] = useState(false)
    const [currentNameUser, setCurrentNameUser] = useSessionStorage("username")
    const [currentTipoUser, setCurrentTipoUser] = useSessionStorage("tipoUser")

    async function errorHandler(error) {
      console.log(error);
      const map={
        'Invalid login credentials':function(){
          setSendingLogin(false)
          return MySwal.fire({
            title: <strong>Error!</strong>,
            html: (
              <i>
                Upps.. Los datos ingresados no son correctos, si aún no te has registrado no te preocupes, registrarte tomara solo un momento
              </i>
            ),
            icon: "error",
          }) 
        },
        'Password should be at least 6 characters':function(){
          setSendingLogin(false)
          return MySwal.fire({
            title: <strong>Error!</strong>,
            html: (
              <i>
                La contraseña debe tener al menos 6 caracteres
              </i>
            ),
            icon: "error",
          }) 
        },
        'Las contraseñas no coinciden':function(){
          setSendingLogin(false)
          return MySwal.fire({
            title: <strong>Error!</strong>,
            html: (
              <i>
                Upps... parece que las contraseñas no coinciden, digitalas nuevamente
              </i>
            ),
            icon: "error",
          }) 
        },
        'Email not confirmed':function(){
          setSendingLogin(false)
          return MySwal.fire({
            title: <strong>Error!</strong>,
            html: (
              <i>
                Upps... parece que aún no has confirmado tu email, por favor ingresa a tu email y confirma tu registro
              </i>
            ),
            icon: "error",
          }) 
        }
      }
      return map[error.message]() ?? MySwal.fire({
        title: <strong>Error!</strong>,
        html: (
          <i>
            Ocurrió un error inesperado por favor intentelo nuevamente en un momento
          </i>
        ),
        icon: "error",
      })
    }

    async function getTiposDocumento(){
      try {
        let { data: tipos_documento, error } = await supabase
        .from('tipos_documento')
        .select('*')
        if(error)throw error
        return tipos_documento
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function getCiiu(){
      try {
        let { data: ciiu, error } = await supabase
          .from('ciiu')
          .select('*')
        if(error)throw error
        return ciiu
      } catch (error) {
        await errorHandler(error)
      }
    }


    async function getTipoPersonaBanca(){
      try {
        let { data: tipo_persona_banca, error } = await supabase
          .from('tipo_persona_banca')
          .select('*')
        if(error)throw error
        return tipo_persona_banca
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function getBarrios(){
      try {
        let { data: barrios, error } = await supabase
          .from('barrios')
          .select('*')
        if(error)throw error
        return barrios
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function getGeneros(){
      try {
        let { data: generos, error } = await supabase
          .from('generos')
          .select('*')
        if(error)throw error
        return generos
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function getEtnias(){
      try {
        let { data: etnias, error } = await supabase
          .from('etnias')
          .select('*')
        if(error)throw error
        return etnias
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function getVulnerabilidades(){
      try {
        let { data: vulnerabilidades, error } = await supabase
          .from('vulnerabilidades')
          .select('*')
        if(error)throw error
        return vulnerabilidades
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function getNacionalidades(){
      try {
        let { data: nacionalidades, error } = await supabase
          .from('nacionalidades')
          .select('*')
        if(error)throw error
        return nacionalidades
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function getEstadosCiviles(){
      try {
        let { data: estado_civil, error } = await supabase
          .from('estado_civil')
          .select('*')
        if(error)throw error
        return estado_civil
      } catch (error) {
        await errorHandler(error)
      }
    }
    

    async function verifyUserPersonaGeneralPerfil(id){
      try {
        let { data: persona_general_perfil, error } = await supabase
          .from('persona_general_perfil')
          .select('nombres')
          .eq('id_user',id)
        if(error) throw error
        return persona_general_perfil
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function verifyUserEmpresaGeneralPerfil(id){
      try {
        let { data: empresa_general_perfil, error } = await supabase
          .from('empresa_general_perfil')
          .select('nombre_empresa')
          .eq('id_user',id)
        if(error) throw error
        return empresa_general_perfil
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function getSession(urlTo=null){
      try {
        const { data, error } = await supabase.auth.getSession()
        if(error)throw error
        if(data.session===null){
          if(urlTo==="registro-empresa" || urlTo==="registro-persona"){
            return navigate(urlTo)
          }
          return navigate("/login")
        }
        if((currentTipoUser==="persona") && (urlTo) && (urlTo.includes("empleo-joven"))){
          return navigate("/")
        }
        return data
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function validateUserActive(){
      try {
        const { data, error } = await supabase.auth.getSession()
        if (error) throw error
        if(data.session===null){return "noUser"}
        const user = await verifyUser(data.session.user.id)
        if(user.length===0){return "noRegistro"}
        return user;
      } catch (error) {
        await errorHandler(error)
      }
    } 
    async function login(user){
      try {
        const { data, error } = await supabase.auth.signInWithPassword(user)
        if(error) throw error
        const personaVerified = await verifyUserPersonaGeneralPerfil(data.user.id)
        const empresaVerified = await verifyUserEmpresaGeneralPerfil(data.user.id)
        if(personaVerified.length>0){
          setCurrentNameUser(personaVerified[0].nombres)
          setCurrentTipoUser("persona")
        } else if(empresaVerified.length>0){
          setCurrentNameUser(empresaVerified[0].nombre_empresa)
          setCurrentTipoUser("empresa")
        }
        navigate("/")
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function signOutUser(){
      try {
        const { error } = await supabase.auth.signOut()
        if(error) throw error
        setCurrentNameUser("")
        setCurrentTipoUser("")
        setSendingLogin(false)
        navigate("/login")
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function registerAuthSchema(authObject){
      try {
        const { data, error } = await supabase.auth.signUp(
          authObject)
        if(error) throw error
        return data
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function registerPersonaSchema(personaObject){
      try {
        const { data, error } = await supabase
            .from('persona_general_perfil')
            .insert([personaObject])
        if(error) throw error
        return data
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function registerEmpresaSchema(empresaObject){
      try {
        const { data, error } = await supabase
            .from('empresa_general_perfil')
            .insert([empresaObject])
        if(error) throw error
        return data
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function registerPersonaGeneral(personaObject, authObject){
      try {
        if(authObject.confirm_password!==authObject.password) throw new Error("Las contraseñas no coinciden")
        const newAuthObject = {
          email:authObject.email,
          password:authObject.password
        }
        const user = await registerAuthSchema(newAuthObject)
        personaObject.id_user=user.user.id
        await registerPersonaSchema(personaObject)
        let timerInterval
        await MySwal.fire({
          icon: "success",
          title: 'Su informacion ha sido guardada satisfactoriamente',
          html: 'Se le ha enviado un correo electrónico para verificar su registro, ya puede cerrar esta ventana.',
          timer: 4000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        setSendingLogin(false)
        navigate("/login")
      } catch (error) {
        await errorHandler(error)
      }
    }
    async function registerEmpresaGeneral(empresaObject, authObject){
      try {
        if(authObject.confirm_password!==authObject.password) throw new Error("Las contraseñas no coinciden")
        const newAuthObject = {
          email:authObject.email,
          password:authObject.password
        }
        const user = await registerAuthSchema(newAuthObject)
        empresaObject.id_user=user.user.id
        await registerEmpresaSchema(empresaObject)
        let timerInterval
        await MySwal.fire({
          icon: "success",
          title: 'Su informacion ha sido guardada satisfactoriamente',
          html: 'Se le ha enviado un correo electrónico para verificar su registro, ya puede cerrar esta ventana.',
          timer: 4000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        setSendingLogin(false)
        navigate("/login")
      } catch (error) {
        await errorHandler(error)
      }
    }

    async function getConvocatoriaActive(){
      try {
        let { data: convocatoria_empleo_joven, error } = await supabase
        .from('convocatoria_empleo_joven')
        .select('*')
        .eq('estado',true)
        if(error) throw error
        return convocatoria_empleo_joven
      } catch (error) {
        await errorHandler(error)
      }
    }

    async function saveDocumentosEmpleoJoven(documento){
      try {
        const session = await getSession()
        console.log(session.session.user.id);
        /*
        const { data, error } = await supabase
          .storage
          .from('documentos')
          .upload(`documentos_empresa_empleo_joven/${session.session.user.id}/${fecha_inicio}-${fecha_fin}/documentoIdentificacion.pdf`, archivo[0][0], {
            cacheControl: '3600',
            upsert: true
          })
        if(error)throw error
        console.log(data)
        */
      } catch (error) {
        await errorHandler(error)
      }
    }
    
    

    return (
    <GeneralContext.Provider 
    value={{
      sendingLogin,
      currentNameUser,
      currentTipoUser,
      setSendingLogin,
      getTiposDocumento,
      getTipoPersonaBanca,
      getBarrios,
      getGeneros,
      getEtnias,
      getVulnerabilidades,
      getNacionalidades,
      getEstadosCiviles,
      getCiiu,
      validateUserActive,
      login,
      signOutUser,
      registerPersonaGeneral,
      registerEmpresaGeneral,
      getSession,
      saveDocumentosEmpleoJoven
    }}>
    {props.children}
    </GeneralContext.Provider>
    )
}