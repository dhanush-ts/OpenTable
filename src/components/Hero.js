
import Search from './Search'
import Title from './Title'

export default function Hero({tit,message,search}) {

  var cl = ""

  if(search){
    cl = "bg-gradient-to-r py-3 justify-center flex flex-col from-cyan-950 to-cyan-700 mx-auto";
  }else if(!tit){
    cl = "bg-gradient-to-r py-8 justify-center flex flex-col from-cyan-950 to-cyan-700 mx-auto";
  }else{
    cl = "bg-gradient-to-r py-20 justify-center flex flex-col from-cyan-950 to-cyan-700 mx-auto";
  }

  return (
        <div className={cl}>
          {!search &&<Title tit={tit} message={message} />}
          {(search || !tit) && <Search />}
        </div>
  )
}