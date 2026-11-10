import Image from 'next/image'

type PageHeaderProps = {
  title: string
  text: string
  image: string
}

export default function PageHeader({ title, text, image }: PageHeaderProps) {
  return (
    <header className="page-hero">
      <div className="page-hero-media" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="page-hero-shade" />
      <div className="page-hero-copy">
        <h1>{title}</h1>
        <p>{text}</p>
        <span className="hero-rule" />
      </div>
    </header>
  )
}
