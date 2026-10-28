export default function Header() {
  const Sobremi = ['Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'];
    return (
    <section>
        <ul>
        {Sobremi.map((skill, index) => (
            <li key={index}>{Sobremi}</li>
        ))}
        </ul>
    </section>
  );
}