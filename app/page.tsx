import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Product } from '@/typings';

const staticProducts: Array<Product> = [
	{
		id: 1,
		name: 'Earthen Bottle',
		href: '#',
		price: '$48',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
		imageAlt:
			'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		id: 2,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		imageAlt:
			'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
	{
		id: 3,
		name: 'Focus Paper Refill',
		href: '#',
		price: '$89',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		imageAlt:
			'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 4,
		name: 'Machined Mechanical Pencil',
		href: '#',
		price: '$35',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		imageAlt:
			'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
];

export default function Homepage() {
	return (
		<>
			<Nav />
			<main>
				<div className='mx-auto max-w-5xl py-32 sm:py-10 lg:py-1'>
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
								className='divide-x divide-gray-600 rounded-md bg-gray-900 hover:bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								<span className='pr-6'>Get the bundle</span>
								<span className='pl-6'>$199</span>
							</a>
						</div>
					</div>
				</div>
				<div className='mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
					<h2 className='sr-only'>Products</h2>

					<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{staticProducts.map((product) => (
							<a
								key={product.id}
								href={product.href}
								className='group h-[500] w-full'
							>
								<div className='aspect-h-3 aspect-w-4 w-full overflow-hidden rounded-lg'>
									<Image
										src={product.imageSrc}
										alt={product.imageAlt}
										width={350}
										height={233}
										className='h-full w-full object-cover object-center group-hover:opacity-75'
									/>
								</div>
								<h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
								<p className='mt-1 text-lg font-medium text-gray-900'>
									{product.price}
								</p>
							</a>
						))}
					</div>
				</div>
			</main>
		</>
	);
}

