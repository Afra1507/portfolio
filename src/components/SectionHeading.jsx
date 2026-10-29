export default function SectionHeading({ kicker, title, lead }) {
  return (
    <header className="section-head" data-reveal>
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </header>
  );
}
