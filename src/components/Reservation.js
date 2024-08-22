

export default function Reservation() {
  return (
    <div className="bg-white p-0.5 shadow md:-mt-9 my-5 mx-auto md:m-auto max-w-xs rounded">
            <p className="text-xs font-semibold mx-2 py-1 border-b">Make a Reservation</p>
            <div className="m-2">
              <label htmlFor="person" className="text-xs font-bold">Party size</label>
              <br />
              <select name="person" id="person" className="border-b py-2 text-xs w-full">
                <option value="1 person">1 Person</option>
                <option value="2 person">2 Person</option>
              </select>
              <div className="flex my-2 p-2 border-b">
                <div className="text-xs mr-4">
                  <label htmlFor="time" className="font-bold">Time</label>
                  <br />
                  <select name="time" className="w-full" id="time">
                    <option value="7:30">7:30</option>
                    <option value="8:30">8:30</option>
                  </select>
                </div>
                <div className="text-xs">
                  <p className="font-bold">Date</p>
                  <input type="date" />
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 w-full rounded text-lg text-slate-50 py-1">Find a Table</button>
            </div>
          </div>
  )
}
