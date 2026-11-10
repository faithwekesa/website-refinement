const partners = [
  { src: 'aca.png', name: 'ACA' },
  { src: 'equity-.png', name: 'Equity' },
  { src: 'knhcr.png', name: 'KNHCR' },
  { src: 'pac.png', name: 'PAC' },
  { src: 'stpaul2.jpeg', name: "St Paul's" },
  { src: 'galana.png', name: 'Galana' },
  { src: 'ponea.jpeg', name: 'Ponea' },
  { src: 'seventh.png', name: 'Seventh' },
  { src: 'bukura.png', name: 'Bukura' },
  { src: 'mrgreen.png', name: 'Mr Green' },
  { src: 'usaid.jpeg', name: 'USAID' },
  { src: 'eacc.png', name: 'EACC' },
]

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden}>
      {partners.map((partner) => (
        <img
          key={partner.src}
          src={`/images/${partner.src}`}
          alt={hidden ? '' : partner.name}
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="trust" aria-label="Organisations that trust us">
      <div className="container">
        <div className="trust-inner">
          <h2 className="trust-label">Trusted by</h2>
          <div className="marquee">
            <div className="marquee-track">
              <Group />
              <Group hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
