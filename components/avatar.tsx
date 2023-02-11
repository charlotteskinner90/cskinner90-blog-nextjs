type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} width="48px" height="48px" className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="dark:text-neutral-50 text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
