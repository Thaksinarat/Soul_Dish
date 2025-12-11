export const Processing = ({current, total}) => {
    const progress = (current/ total) * 100;

    return <>
        <div className="w-[80%] md:w-[55%] bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-orange-400 rounded-full h-2 transition-all duration-300" style={{ width: `${progress}%`}}>
            </div>
        </div>
    </>
}