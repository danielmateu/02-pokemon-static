import { useTheme, Text, Spacer } from "@nextui-org/react"
import Image from "next/image";
import { Pokemon } from "../../interfaces";


export const Navbar = () => {

    const {theme} = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 1em',
            backgroundColor: theme?.colors.gray900.value
        }}>

            <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`} 
            alt='icono de la app' 
            width={90}
            height={90}
            />

            <Text color="white" h1>P</Text>
            <Text color="white" h3>okémon</Text>

            <Spacer css={{flex:1}}/>
            <Text color="white" >Favoritos</Text>

        </div>
    )
}
