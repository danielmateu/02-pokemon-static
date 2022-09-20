import { useTheme, Text, Spacer, Link } from "@nextui-org/react"
import NextLink from 'next/link'

import Image from "next/image";



export const Navbar = () => {

    const { theme } = useTheme();

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

        <NextLink href='/' passHref>
            <Link>
                <Text color="white" h1>P</Text>
                <Text color="white" h3>okémon</Text>
            </Link>
        </NextLink>

            <Spacer css={{ flex: 1 }} />

        <NextLink href='/favorites' passHref>
            <Link css={{marginRight: '1.5em'}}>
                <Text color="white">Favoritos</Text>
            </Link>
        </NextLink>

        </div>
    )
}
