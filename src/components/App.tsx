import { useState } from 'react'
import { AboutBlock } from './AboutBlock'
import { DutyBlock } from './DutyBlock'
import { JobBlock } from './JobBlock'
import { LogoBlock } from './LogoBlock'
import { NameBlock } from './NameBlock'
import { StackBlock } from './StackBlock'
import  css from './main.module.scss'

export const App=()=>{
const [theme, setTheme]=useState("light")
return <div className={css.wrapper}><LogoBlock setTheme={setTheme} theme={theme}/>
<NameBlock/><DutyBlock/><StackBlock/><AboutBlock/><JobBlock/></div>}