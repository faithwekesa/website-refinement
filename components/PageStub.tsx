import Link from 'next/link'

type PageStubProps = {
  title: string
  text: string
}

export default function PageStub({ title, text }: PageStubProps) {
  return (
    <main className="stub">
      <div className="container">
        <span className="eyebrow">Coming next</span>
        <h1 className="h2">{title}</h1>
        <p className="lead">{text}</p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </main>
  )
}
