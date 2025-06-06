import { CareersStats } from "../components/CareersStats"

export const Overview = () => {
  return (
    <div className="border-t-2 border-shuttle py-12 mx-24">
        <div className="flex flex-row w-full">
                <h1 className='font-anton text-shuttle text-5xl w-1/2'>IN NUMBERS</h1>
            <div className="flex flex-col justify-center space-y-8 w-1/2">
                <p>When you're defying expectations, data grounds you. These aren't just figures, but a testament to the unexpected power of combining code-driven precision with a dash of design audacity. each project that have done proving ground for crafting robust frontend architectures while simultaneously embracing intuitive UI/UX principles. And those rework customers? They're living proof of the value in iterative refinement and a keen eye for both functionality and user delight. Turns out, a developer's systematic approach, applied to design problems, can yield some surprisingly elegant solutions. Who knew?</p>
                <div className="flex flex-row justify-between items-center mt-4 space-x-2">
                    <CareersStats years="10" desc="Projects completed" />
                    <CareersStats years="5" desc="Rework customers" />
                    <CareersStats years="1" desc="Years experience" />
                </div>
            </div>
        </div>
    </div>
  )
}
