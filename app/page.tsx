//import Image from 'next/image';

import { Nav } from '@/components/Nav';

export default function Homepage() {
	return (
		<>
			<Nav />
			<main>
				<div className='mx-auto max-w-5xl py-32 sm:py-48 lg:py-56'>
					<div className='hidden sm:mb-8 sm:flex sm:justify-center'>
						<div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
							Announcing our latest innovations.{' '}
							<a href='#' className='font-semibold text-indigo-600'>
								<span className='absolute inset-0' aria-hidden='true'></span>
								Read more <span aria-hidden='true'>&rarr;</span>
							</a>
						</div>
					</div>
					<div className='text-center'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
							Beautiful digital design assets
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Take your digital products to another level with our collection of
							UI kits, templates and icon sets. All our assets were carefully
							designed to work together. We have obsessed over every little
							detail, and we belive it shows.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<a
								href='#'
								className='divide-x divide-gray-600 rounded-md bg-gray-900 hover:bg-gray-700 px-6 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								<span className='pr-6'>Get the bundle</span>
								<span className='pl-6'>$199</span>
							</a>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

