
export const HireButton = ({link = "https://wa.me/628986367472", text="HIRE ME NOW"}) => {
  return (
    <div>
        <a href={link} target="_blank" className="h-full" rel="noopener noreferrer">
            <button className="w-40 h-16 bg-light text-primary py-2 px-4 rounded-full font-anton font-medium hover:bg-primary hover:text-light text-lg transition duration-300">
            {text}
            </button>
        </a>
    </div>
  )
}
