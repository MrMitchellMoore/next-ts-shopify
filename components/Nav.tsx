import Image from 'next/image';

export function Nav() {
	return (
		<nav
			className='flex items-center justify-between p-6 lg:px-8 w-full'
			aria-label='Global'
		>
			<div className='flex lg:flex-1'>
				<a href='#' className='-m-1.5 p-1.5'>
					<span className='sr-only'>Beautiful Designs</span>
					<Image
						className='h-8 w-auto'
						src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
						alt=''
						width={300}
						height={300}
					/>
				</a>
			</div>
		</nav>
	);
}
