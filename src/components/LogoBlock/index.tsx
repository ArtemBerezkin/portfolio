import { FC } from 'react'
import  css from './LogoBlock.module.scss'
import classnames from 'classnames'

export const LogoBlock:FC<{setTheme:any, theme:any}>=({setTheme, theme})=>(<div className={classnames(theme==="light"?css.light:css.dark)}>LOGO <button onClick={()=>setTheme((prev:string)=>prev==="light"?"dark":"light")}>{theme}</button></div>
)