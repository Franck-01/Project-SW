const Header = () => {

    const saludo = "Bienvenido a la Armada"
console.log(saludo)

    return (
        <header>
            <div className="imagen">
                <img src="images/SWTFA.png"/>
                <h2 className="white">Escoje tus naves, inspecciona el arsenal y crea la flota mas poderosa que la galaxia haya visto</h2>
                <h3>{saludo}</h3>
            </div>
        </header>
    );
}
export default Header;