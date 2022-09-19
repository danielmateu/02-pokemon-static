import { useTheme, Text, Spacer } from "@nextui-org/react"


export const Navbar = () => {


    const {theme} = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 2em',
            backgroundColor: theme?.colors.gray900.value
        }}>
            <Text color="white" h1>P</Text>
            <Text color="white" h3>okémon</Text>

            <Spacer css={{flex:1}}/>
            <Text color="white" >Favoritos</Text>

        </div>
    )
}
