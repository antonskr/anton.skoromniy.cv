interface OuterLinkProps {
  href: string
  name: string
}

const OuterLink = ({ href, name }: OuterLinkProps) => {
  return (
    <a href={href} target={'_blank'} rel={'noreferrer'}>
      {name}
    </a>
  )
}

export default OuterLink
