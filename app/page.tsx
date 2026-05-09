'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
	const router = useRouter();

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-bold text-blue-600">스틱맨 활쏘기 게임!</h1>
			<button
				className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-green-600"
				onClick={() => router.push('/game')}
			>게임시작</button>
		</main>
	);
}