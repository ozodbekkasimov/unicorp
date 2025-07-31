interface IProps {
	size: number
	color?: string
}

const FourPointStar = ({ size = 40, color = 'white' }: IProps) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 100 100'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{
			filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))',
		}}
	>
		<polygon
			points='50,2 53,48 98,50 53,52 50,98 47,52 2,50 47,48'
			fill={color}
		/>tile
	</svg>
)

export default FourPointStar
