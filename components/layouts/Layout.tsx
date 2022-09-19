import {  FC, useState } from "react"


import Head from "next/head"

interface Props {
    title?: string;
    children?: React.ReactNode
    
}


//Title: Listado de Pokemons
export const Layout: FC<Props> = ({children, title}) => {

   
    return (
        <>
            <Head>
                <title>{ title || "Pokemon App"}</title>
                <meta name="author" content="Daniel Mateu"/>
                <meta name="description" content={`Información sobre ${title}`}/>
                <meta name='keywords' content={`${title}, pokemon,pokedex`}/>                
            </Head>

            {/* Navbar */}

            <main>
                {children}
            </main>
        </>
    )
}
