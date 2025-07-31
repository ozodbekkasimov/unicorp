import type { ICode, IEditorFile, IFile } from '@/types'

export const ContextActiveBarIcons = [
	{
		url: '/vscode/files.svg',
		isActive: true,
		title: 'EXPLORER',
		id: 1,
	},
	{
		url: '/vscode/search.svg',
		isActive: false,
		title: 'SEARCH',
		id: 2,
	},
	{
		url: '/vscode/source-control.svg',
		isActive: false,
		title: 'SOURCE CONTROL',
		id: 3,
	},
	{
		url: '/vscode/debug.svg',
		isActive: false,
		title: 'DEBUG',
		id: 4,
	},
	{
		url: '/vscode/extensions.svg',
		isActive: false,
		title: 'EXTENSIONS',
		id: 5,
	},
]

export const files: IFile[] = [
	{
		id: 'js',
		icon: 'JS',
		name: 'Calculator.js',
		classes:
			'w-[12%] cursor-pointer text-center text-[#FFF500] inter font-semibold',
	},

	{
		id: 'html',
		icon: '<>',
		name: 'Calculator.html',
		classes:
			'w-[12%] cursor-pointer text-center text-[#FF8A00] inter font-semibold',
	},
	{
		id: 'css',
		icon: '#',
		name: 'Style.css',
		classes:
			'w-[12%] cursor-pointer text-center text-[#519ABA] inter font-normal',
	},
]

const red = 'className="text-[#D04F59]"'
const blue = 'className="text-[#3492E3]"'
const pink = 'className="text-[#B75CC9]"'
const green = 'className="text-[#608B4E]"'
const orange = 'className="text-[#CDAB67]"'

export const codes: ICode[] = [
	{
		lineNum: 1,
		lineCode: `<span ${pink}'>let</span> <span ${red}>runningTotal</span> <span ${blue}>=</span> <span ${orange}>0</span>;`,
	},

	{
		lineNum: 2,
		lineCode: `<span ${pink}'>let</span> <span ${red}>buffer</span> <span ${blue}>=</span> <span ${green}>"0"</span>;`,
	},
	{
		lineNum: 3,
		lineCode: `<span ${pink}'>let</span> <span ${red}>previousOperator</span>;`,
	},

	{
		lineNum: 4,
		lineCode: `<span className='hidden select-none'>...</span>`,
	},

	{
		lineNum: 5,
		lineCode: `<span ${pink}>const</span> <span ${orange}>screen <span ${blue}>=</span> document</span>.<span ${blue}>querySelector(<span ${green}>".screen"</span>)</span>;`,
	},
	{
		lineNum: 6,
		lineCode: `<span className='hidden select-none'>...</span>`,
	},

	{
		lineNum: 7,
		lineCode: `<span ${pink}>function</span> <span ${blue}>buttonClic</span><span ${orange}>(<span ${pink}>value</span>) {</span>`,
	},
	{
		lineNum: 8,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>if(<span ${blue}>isNaN(<span ${red}>value</span>)</span>) {</span>`,
	},
	{
		lineNum: 9,
		lineCode: `<span className="select-none text-transparent">......</span><span ${blue}>handleSymbol(<span ${red}>value</span>)</span>;`,
	},
	{
		lineNum: 10,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>} else {</span>`,
	},
	{
		lineNum: 11,
		lineCode: `<span className="select-none text-transparent">......</span><span ${blue}>handleNumber(<span ${red}>value</span>)</span>;`,
	},
	{
		lineNum: 12,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>}</span>`,
	},
	{
		lineNum: 13,
		lineCode: `<span className="select-none text-transparent">...</span><span ${orange}>screen</span>.<span ${red}>innerText <span ${blue}>=</span> buffer</span>;`,
	},
	{
		lineNum: 14,
		lineCode: `<span ${orange}>}</span>`,
	},
	{
		lineNum: 15,
		lineCode: `<span className='hidden select-none'>...</span>`,
	},

	{
		lineNum: 16,
		lineCode: `<span ${pink}>function</span> <span ${blue}>handleSymbol</span><span ${orange}>(<span ${pink}>Symbol</span>) {</span>`,
	},
	{
		lineNum: 17,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>switch(<span ${red}>Symbol</span>) {</span>`,
	},
	{
		lineNum: 18,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>case</span> <span ${green}>"C"</span> <span ${blue}>:</span>`,
	},
	{
		lineNum: 19,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>buffer</span> <span ${blue}>=</span> <span ${green}>"0"</span>;`,
	},
	{
		lineNum: 20,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>runningTotal</span> <span ${blue}>=</span> <span ${orange}>0</span>;`,
	},
	{
		lineNum: 21,
		lineCode: `<span className="select-none text-transparent">......</span><span ${pink}>break</span>;`,
	},
	{
		lineNum: 22,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>case</span> <span ${green}>"="</span> <span ${blue}>:</span>`,
	},
	{
		lineNum: 23,
		lineCode: `<span className="select-none text-transparent">......</span><span ${pink}>if(<span ${red}>previousOperator</span> <span ${blue}>===</span> <span ${orange}>null</span>) {</span>`,
	},
	{
		lineNum: 24,
		lineCode: `<span className="select-none text-transparent">.........</span><span ${pink}>return</span>;`,
	},
	{
		lineNum: 25,
		lineCode: `<span className="select-none text-transparent">......</span><span ${blue}>}</span>`,
	},
	{
		lineNum: 26,
		lineCode: `<span className="select-none text-transparent">......</span><span ${blue}>flushOperation(parseInt<span ${orange}>(<span ${red}>buffer</span>)</span>);</span>`,
	},
	{
		lineNum: 27,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>previousOperator</span> <span ${blue}>=</span> <span className="text-[#CDAB67]">null</span>;`,
	},
	{
		lineNum: 28,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>buffer</span> <span ${blue}>=</span> <span ${red}>runningTotal</span>;`,
	},
	{
		lineNum: 29,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>runningTotal</span> <span ${blue}>=</span> <span ${orange}>0</span>;`,
	},
	{
		lineNum: 30,
		lineCode: `<span className="select-none text-transparent">......</span><span ${pink}>break</span>;`,
	},
	{
		lineNum: 31,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>case</span> <span ${green}>"←"</span> <span ${blue}>:</span>`,
	},
	{
		lineNum: 32,
		lineCode: `<span className="select-none text-transparent">......</span><span ${pink}>if</span><span ${blue}>(<span ${red}>buffer</span>.<span ${blue}>length</span> <span ${blue}>===</span> <span ${orange}>1</span>) {</span>`,
	},
	{
		lineNum: 33,
		lineCode: `<span className="select-none text-transparent">.........</span><span ${red}>buffer</span> <span ${blue}>=</span> <span ${green}>"0"</span>;`,
	},
	{
		lineNum: 34,
		lineCode: `<span className="select-none text-transparent">......</span><span ${pink}>} else {</span>`,
	},
	{
		lineNum: 35,
		lineCode: `<span className="select-none text-transparent">.........</span><span ${red}>buffer</span> <span ${blue}>=</span> <span ${red}>buffer</span>.<span ${blue}>toString</span><span ${orange}>(0</span>, <span ${red}>buffer</span>.<span ${blue}>length -</span> <span ${orange}>1)</span>;`,
	},
	{
		lineNum: 36,
		lineCode: `<span className="select-none text-transparent">......</span><span ${pink}>}</span>`,
	},
	{
		lineNum: 37,
		lineCode: `<span className="select-none text-transparent">......</span><span ${pink}>break</span>;`,
	},
	{
		lineNum: 38,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>case</span> <span ${green}>"+"</span> <span ${blue}>:</span>`,
	},
	{
		lineNum: 39,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>case</span> <span ${green}>"−"</span> <span ${blue}>:</span>`,
	},
	{
		lineNum: 40,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>case</span> <span ${green}>"×"</span> <span ${blue}>:</span>`,
	},
	{
		lineNum: 41,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>case</span> <span ${green}>"÷"</span> <span ${blue}>:</span>`,
	},
	{
		lineNum: 42,
		lineCode: `<span className="select-none text-transparent">......</span><span ${blue}>handleMath(<span ${pink}>Symbol</span>);</span>`,
	},
	{
		lineNum: 43,
		lineCode: `<span className="select-none text-transparent">}</span>`,
	},

	{
		lineNum: 44,
		lineCode: `<span ${pink}>function</span> <span ${blue}>handleMath</span><span ${orange}>(<span ${pink}>Symbol</span>) {</span>`,
	},
	{
		lineNum: 45,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>if</span><span ${blue}>(<span ${red}>buffer</span> === <span ${orange}>0</span>) {</span>`,
	},
	{
		lineNum: 46,
		lineCode: `<span className="select-none text-transparent">......</span><span ${pink}>return</span>;`,
	},
	{
		lineNum: 47,
		lineCode: `<span className="select-none text-transparent">...</span><span ${blue}>}</span>`,
	},
	{
		lineNum: 48,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>const</span> <span ${orange}>intBuffer</span> <span ${blue}>= <span ${pink}>parseInt</span>(<span ${red}>buffer</span>)</span>;`,
	},
	{
		lineNum: 49,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>if</span><span ${blue}>(<span ${red}>runningTotal</span> === <span ${orange}>0</span>) {</span>`,
	},
	{
		lineNum: 50,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>runningTotal</span> <span ${blue}>=</span> <span ${orange}>intBuffer</span>;`,
	},
	{
		lineNum: 51,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>} else {</span>`,
	},
	{
		lineNum: 52,
		lineCode: `<span className="select-none text-transparent">......</span><span ${blue}>flushOperation(<span ${orange}>intBuffer</span>)</span>;`,
	},
	{
		lineNum: 53,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>}</span>`,
	},
	{
		lineNum: 54,
		lineCode: `<span className="select-none text-transparent">...</span><span ${red}>previousOperator</span> <span ${blue}>=</span> <span ${pink}>Symbol</span>;`,
	},
	{
		lineNum: 55,
		lineCode: `<span className="select-none text-transparent">...</span><span ${red}>buffer</span> <span ${blue}>=</span> <span ${green}>"0"</span>;`,
	},
	{
		lineNum: 56,
		lineCode: `<span ${orange}>}</span>`,
	},

	{
		lineNum: 57,
		lineCode: `<span ${pink}>function</span> <span ${blue}>flushOperation</span><span ${orange}>(<span ${orange}>intBuffer</span>) {</span>`,
	},
	{
		lineNum: 58,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>if</span><span ${blue}>(<span ${red}>previousOperator</span> === <span ${green}>"+"</span>) {</span>`,
	},
	{
		lineNum: 59,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>runningTotal</span> <span ${blue}>=</span> <span ${red}>runningTotal</span> <span ${blue}>+</span> <span ${orange}>intBuffer</span>;`,
	},
	{
		lineNum: 60,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>} else if</span><span ${blue}>(<span ${red}>previousOperator</span> === <span ${green}>"−"</span>) {</span>`,
	},
	{
		lineNum: 61,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>runningTotal</span> <span ${blue}>=</span> <span ${red}>runningTotal</span> <span ${blue}>-</span> <span ${orange}>intBuffer</span>;`,
	},
	{
		lineNum: 62,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>} else if</span><span ${blue}>(<span ${red}>previousOperator</span> === <span ${green}>"x"</span>) {</span>`,
	},
	{
		lineNum: 63,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>runningTotal</span> <span ${blue}>=</span> <span ${red}>runningTotal</span> <span ${blue}>*</span> <span ${orange}>intBuffer</span>;`,
	},
	{
		lineNum: 64,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>} else if</span><span ${blue}>(<span ${red}>previousOperator</span> === <span ${green}>"÷"</span>) {</span>`,
	},
	{
		lineNum: 65,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>runningTotal</span> <span ${blue}>=</span> <span ${red}>runningTotal</span> <span ${blue}>/</span> <span ${orange}>intBuffer</span>;`,
	},
	{
		lineNum: 66,
		lineCode: `<span className="select-none text-transparent">}</span>`,
	},

	{
		lineNum: 67,
		lineCode: `<span ${pink}>function</span> <span ${blue}>handleNumber</span><span ${orange}>(<span ${pink}>numberString</span>) {</span>`,
	},
	{
		lineNum: 68,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>if</span><span ${blue}>(<span ${red}>buffer</span> === <span ${green}>"0"</span>) {</span>`,
	},
	{
		lineNum: 69,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>buffer</span> <span ${blue}>=</span> <span ${pink}>numberString</span>;`,
	},
	{
		lineNum: 70,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>} else {</span>`,
	},
	{
		lineNum: 71,
		lineCode: `<span className="select-none text-transparent">......</span><span ${red}>buffer</span> <span ${blue}>+=</span> <span ${pink}>numberString</span>;`,
	},
	{
		lineNum: 72,
		lineCode: `<span className="select-none text-transparent">...</span><span ${pink}>}</span>`,
	},
	{
		lineNum: 73,
		lineCode: `<span ${orange}>}</span>`,
	},

	{
		lineNum: 74,
		lineCode: `<span ${pink}>function</span> <span ${blue}>init</span><span ${orange}>() {</span>`,
	},
	{
		lineNum: 75,
		lineCode: `<span className="select-none text-transparent">...</span><span ${blue}>document</span>.<span ${orange}>querySelector</span><span ${blue}>(<span ${green}>".calc-buttons"</span>)</span>.<span ${red}>addEventListener</span><span ${blue}>(</span><span ${green}>"click"</span>, <span ${pink}>function</span><span ${blue}>(<span ${orange}>event</span>) {</span>`,
	},
	{
		lineNum: 76,
		lineCode: `<span className="select-none text-transparent">......</span><span ${blue}>buttonClic(<span ${pink}>event</span>.<span ${red}>target</span>.<span ${red}>innerText</span>)</span>;`,
	},
	{
		lineNum: 77,
		lineCode: `<span className="select-none text-transparent">...</span><span ${blue}>})</span>;`,
	},
	{
		lineNum: 78,
		lineCode: `<span ${orange}>}</span>`,
	},

	{
		lineNum: 79,
		lineCode: `<span ${blue}>init</span><span ${orange}>()</span>;`,
	},
]

export const contextEditorFiles: IEditorFile[] = [
	{
		id: 'js',
		name: 'Calculator.js',
		codes: codes,
		isActive: true,
	},
	{
		id: 'html',
		name: 'Calculator.html',
		codes: [
			{
				lineCode: 'Index.html',
				lineNum: 1,
			},
		],
		isActive: false,
	},
	{
		id: 'css',
		name: 'Style.css',
		codes: [
			{
				lineCode: 'Style.css',
				lineNum: 1,
			},
		],
		isActive: false,
	},
]
