import type { ICode } from '@/types'

export const codeLines: ICode[] = [
	{
		lineNum: 1,
		lineCode: '<span className="text-white/20">//Type some code -></span>',
	},
	{
		lineNum: 2,
		lineCode:
			'<span className="max-[340px]:hidden text-transparent select-none">...</span>',
	},
	{
		lineNum: 3,
		lineCode: `<span className='text-[#FFAC60]'>console</span>.<span className="text-[#1AC69C]">log</span> <span className="text-[#3FA4FF]">"oO08 iIlL1 g9qCGQ ~-+="</span>`,
	},
	{
		lineNum: 4,
		lineCode: `<span className='text-white/20'>// â é ù ï ø ç Ã Ē Æ œ</span>`,
	},
	{
		lineNum: 5,
		lineCode:
			'<span className="max-[340px]:hidden text-transparent select-none">...</span>',
	},
	{
		lineNum: 6,
		lineCode: `<span className='text-[#ff32c6]'>function</span> <span className='text-[#C478FF]'>updateGutters</span>(<span className='text-[#C478FF]'>cm</span>) {`,
	},
	{
		lineNum: 7,
		lineCode: `<span className="text-transparent select-none">...</span><span className='text-[#ff32c6]'>var</span> <span className='text-[#C478FF]'>gutters</span> = <span className='text-[#C478FF]'>cm</span>.<span className='text-[#1AC69C]'>display</span>.<span className='text-[#1AC69C]'>gutters</span>,`,
	},
	{
		lineNum: 8,
		lineCode: `<span className="text-transparent select-none">......</span><span className='text-[#C478FF]'>__specs</span> = <span className='text-[#C478FF]'>cm</span>.<span className='text-[#1AC69C]'>display</span>.<span className='text-[#1AC69C]'>gutters</span>,`,
	},
	{
		lineNum: 9,
		lineCode: `<span className="max-[340px]:hidden text-transparent select-none">...</span>`,
	},
	{
		lineNum: 10,
		lineCode: `	<span className='text-[#FFAC60]'>removeChildren</span>(<span className='text-[#C478FF]'>gutters</span>);`,
	},
	{
		lineNum: 11,
		lineCode: `<span className="max-[340px]:hidden text-transparent select-none">...</span>`,
	},
	{
		lineNum: 12,
		lineCode: `<span className='text-[#ff32c6]'>for</span> (<span className='text-[#ff32c6]'>var</span> <span className='text-[#C478FF]'>i</span> = <span className='text-[#ff32c6]'>0</span>; <span className='text-[#C478FF]'>i</span> < <span className='text-[#FFAC60]'>specs</span>.<span className='text-[#1AC69C]'>length</span>; ++<span className='text-[#C478FF]'>i</span>) {`,
	},
	{
		lineNum: 13,
		lineCode: `<span className="text-transparent select-none">...</span><span className='text-[#ff32c6]'>var</span> <span className='text-[#C478FF]'>guttersClass</span> = <span className='text-[#C478FF]'>__specs</span>[<span className='text-[#C478FF]'>i</span>];`,
	},
	{
		lineNum: 14,
		lineCode: `<span className="text-transparent select-none">...</span><span className='text-[#ff32c6]'>var</span> <span className='text-[#C478FF]'>gElt</span> = <span className='text-[#C478FF]'>gutters</span>.<span className='text-[#1AC69C]'>appendChild</span>(`,
	},
	{
		lineNum: 15,
		lineCode: `<span className="text-transparent select-none">.........</span><span className='text-[#FFAC60]'>elt</span>(`,
	},
	{
		lineNum: 16,
		lineCode: `<span className="text-transparent select-none">............</span><span className='text-[#3FA4FF]'>"div"</span>,`,
	},
	{
		lineNum: 17,
		lineCode: `<span className="text-transparent select-none">............</span><span className='text-[#ff32c6]'>null</span>,`,
	},
	{
		lineNum: 18,
		lineCode: `<span className="text-transparent select-none">............</span><span className='text-[#3FA4FF]'>"CodeMirror-gutter "</span> + <span className='text-[#ff32c6]'>gutterClass</span>`,
	},
	{
		lineNum: 19,
		lineCode: `<span className="text-transparent select-none">.........</span>)`,
	},
	{
		lineNum: 20,
		lineCode: `<span className="text-transparent select-none">...</span>);`,
	},
	{
		lineNum: 21,
		lineCode: `<span className="text-transparent select-none">...</span><span className='text-[#ff32c6]'>if</span> (<span className='text-[#ff32c6]'>gutterClass</span> == <span className='text-[#3FA4FF]'>"CodeMirror-linenumbers"</span>){`,
	},
	{
		lineNum: 22,
		lineCode: `<span className="text-transparent select-none">......</span><span className='text-[#ff32c6]'>cm</span>.<span className='text-[#1AC69C]'>display</span>.<span className='text-[#1AC69C]'>lineGutter</span> = <span className='text-[#ff32c6]'>gElt</span>;`,
	},
	{
		lineNum: 23,
		lineCode: `<span className="text-transparent select-none">......</span><span className='text-[#ff32c6]'>gElt</span>.<span className='text-[#1AC69C]'>style</span>.<span className='text-[#1AC69C]'>width</span> = (<span className='text-[#ff32c6]'>gElt</span>.<span className='text-[#1AC69C]'>display</span>.<span className='text-[#1AC69C]'>lineNumWidth</span> || <span className='text-[#3FA4FF]'>1</span>) + <span className='text-[#3FA4FF]'>"px"</span>;`,
	},

	{
		lineNum: 24,
		lineCode: `<span className="text-transparent select-none ">...</span>}`,
	},
	{
		lineNum: 25,
		lineCode: `}`,
	},
	{
		lineNum: 26,
		lineCode: `<span className='text-[#ff32c6]'>gutters</span>.<span className='text-[#1AC69C]'>style</span>.<span className='text-[#1AC69C]'>display</span> = <span className='text-[#FFAC60]'>i</span> ? <span className='text-[#3FA4FF]'>""</span> : <span className='text-[#3FA4FF]'>"none"</span>;`,
	},

	{
		lineNum: 27,
		lineCode: `<span className="text-transparent select-none max-md:hidden">...</span>`,
	},
	{
		lineNum: 28,
		lineCode: `<span className='text-[#FFAC60]'>updateGutterSpace</span>(<span className='text-[#ff32c6]'>cm</span>);`,
	},
	{
		lineNum: 29,
		lineCode: `<span className="text-transparent select-none max-[340px]:hidden">...</span>`,
	},
	{
		lineNum: 30,
		lineCode: `<span className='text-[#ff32c6]'>return</span> <span className='text-[#ff32c6]'>false</span>;`,
	},
]
