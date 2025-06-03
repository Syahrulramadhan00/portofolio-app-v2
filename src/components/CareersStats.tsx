

export const CareersStats = ({years  = '', desc = ''}) => {
  return (
    <div className="flex flex-col justify-center items-start space-y-2">
        <p className="font-anton text-7xl">{years}+</p>
        <p className="text-shuttle">{desc}</p>
    </div>
  )
}
