export function Tabs({ children }) {
  return (
    <div className="flex gap-1  bg-secondary/5 p-0.5 w-full rounded-lg">
      {children}
    </div>
  )
}

export function Tab({ children, isSelected, onClick }) {
  const classes = [
    "flex text-center py-2 cursor-pointer items-center justify-center py-1.5 px-2 w-full hover:bg-white duration-300 ease-in-out rounded-lg border-2",
    isSelected
      ? "bg-white drop-shadow-2xl border-text/10"
      : "bg-white/50 border-transparent",
  ].join(" ")

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
