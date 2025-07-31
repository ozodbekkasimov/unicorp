import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { navLinks } from '@/constants'
import type { ILink } from '@/types'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'

export default function Mobile() {
	const [position, setPosition] = useState('home')

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size={'icon'}>
					<MenuIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-[50%] z-1000'>
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					{navLinks.map((nav: ILink) => (
						<DropdownMenuRadioItem
							value={nav.route}
							key={nav.route}
							onClick={() => (window.location.hash = `#${nav.route}`)}
						>
							{nav.name}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>Language</DropdownMenuSubTrigger>

						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Eng</DropdownMenuItem>
								<DropdownMenuItem>Ru</DropdownMenuItem>
								<DropdownMenuItem>Uz</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
