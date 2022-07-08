
export default function LineItems({ items, setLineItem, setShowLineItemInput, setIsUpdating, setLineItemIdx }) {
  console.log(items)
  return (
    <>
      <div className="h-auto min-w-96 w-auto min-h-full bg-gray-200 p-8 border border-2 border-gray-300 drop-shadow-2xl rounded">
        <div className="flex flex-col bg-pink-200">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
            Line Items
          </label> */}
          <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-300 dark:border-gray-400 dark:text-black">
            <li className="w-full px-4 py-2 rounded-t-lg dark:border-gray-600 text-center font-bold">
              Line Items
            </li>
          </ul>
          <div className="flex mt-4 w-full">
            <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
              {items.map((item, idx) => (
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg cursor-pointer hover:bg-gray-300" onClick={() => {
                  setLineItem(item)
                  setShowLineItemInput(true)
                  setIsUpdating(true)
                  // alert(idx)
                  setLineItemIdx(idx)
                }}>
                  {item.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
