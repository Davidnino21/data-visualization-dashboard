function MainContainer() {
    return(
        <div className="bg-white flex-grow">
            <h1 className="bg-slate-300 text-center font-bold p-10 text-4xl">Data Visualization Dashboard</h1>
            <div className="p-6">
            <label className="p-3 font-bold">Filter by Category:</label>
            <select className="border-1" name="" id="">
                <option value="">All</option>
                <option value="">Technology</option>
                <option value="">Finance</option>
                <option value="">Healthcare</option>
            </select>
        </div>
        </div>
    )
}

export default MainContainer