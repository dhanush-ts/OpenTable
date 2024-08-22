

export default function Title({tit,message}) {
  return (
    <div>
        <p className={!tit?"text-2xl my-2 font-semibold text-center text-slate-50":"text-center text-slate-50 text-5xl"}>{message}</p>
    </div>
  )
}
