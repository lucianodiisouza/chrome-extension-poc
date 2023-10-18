export function TextArea({ onChange }) {
  return (
    <div>
      <div className="mt-1">
        <textarea
          rows={4}
          name="comment"
          placeholder="write your question here..."
          className="block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  )
}
