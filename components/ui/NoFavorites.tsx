import { Container, Image, Text } from "@nextui-org/react";


export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh - 100px',
            alignItems: 'center',
            justifyContent: 'center',
            alignself: 'center'
        }}>

            <Text h1>No hay favoritos...</Text>
            <Image
                alt="Deberia ser un pokémon"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                width={300}
                height={300}
                css={{ opacity: .1 }}
            />
        </Container>
    )
}
