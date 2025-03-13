export default function DynamicRoutes({params}) {
    return (
        <main>
            <h1>Daynamic routes are here</h1>
            <p>{params.slug}</p>

        </main>
    )
}