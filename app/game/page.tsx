'use client';
import { useState, useRef, useEffect } from 'react';

interface Arrow {
	x: number;
	y: number;
	vx: number;
	vy: number;
}

interface Target {
	x: number;
	y: number;
	width: number;
	height: number;
	vx: number;
}

export default function Page() {
	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const arrowsRef = useRef<Arrow[]>([]);
	const targetsRef = useRef<Target[]>([]);
	const angleRef = useRef(0);
	const characterScaleRef = useRef(1);

	useEffect(() => {
		if (score < 0) setGameOver(true);
	}, [score]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const gravity = 0.1;

		setCanvasSize(canvas);
		draw(canvas, ctx, gravity);

		const handleResize = () => setCanvasSize(canvas);
		const mouseMove = (e: MouseEvent) => handleMouseMove(canvas, e);
		const mouseDown = (e: MouseEvent) => handleMouseDown(canvas, e);
		const contextMenu = (e: MouseEvent) => handleContextMenu(e);

		window.addEventListener('resize', handleResize);
		canvas.addEventListener('mousemove', mouseMove);
		canvas.addEventListener('mousedown', mouseDown);
		canvas.addEventListener('contextmenu', contextMenu);

		return () => {
			window.removeEventListener('resize', handleResize);
			canvas.removeEventListener('mousemove', mouseMove);
			canvas.removeEventListener('mousedown', mouseDown);
			canvas.removeEventListener('contextmenu', contextMenu);
		}
	}, []);

	/**
	 * 캔버스 사이즈
	 * @param canvas 
	 */
	const setCanvasSize = (canvas: HTMLCanvasElement) => {
		if (window.matchMedia('(min-width: 1024px)').matches) {
			canvas.width = 1200;
			canvas.height = 600;
			characterScaleRef.current = 1;
		} else if (window.matchMedia('(orientation: portrait)').matches) {
			canvas.width = 400;
			canvas.height = 300;
			characterScaleRef.current = 0.5;
		} else {
			canvas.width = 700;
			canvas.height = 300;
			characterScaleRef.current = 0.7;
		}
	}

	/**
	 * 과녁 생성
	 * @param canvas 
	 */
	const spawnTarget = (canvas: HTMLCanvasElement) => {
		const width = 30;
		const height = 30;
		const y = Math.random() * (canvas.height - height);
		const vx = -(2 + Math.random() * 3);
		const target: Target = {
			x: canvas.width,
			y,
			width,
			height,
			vx
		}

		targetsRef.current.push(target);
	}

	/**
	 * 화살과 과녁 충돌 확인
	 */
	const checkCollision = () => {
		arrowsRef.current.forEach((arrow) => {
			targetsRef.current.forEach((target) => {
				if((arrow.x < target.x + target.width) &&
					 (arrow.x + (30 * characterScaleRef.current) > target.x) &&
					 (arrow.y < (target.y + target.height)) &&
					 (arrow.y + (2 * characterScaleRef.current) > target.y)) {
						arrowsRef.current = arrowsRef.current.filter((value) => value !== arrow);
						targetsRef.current = targetsRef.current.filter((value) => value !== target);

						setScore((prevScore) => prevScore + 1);
				}
			});
		});
	}

	/**
	 * 캔버스에 그리기
	 * @param canvas 
	 * @param ctx 
	 * @param gravity 
	 */
	const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, gravity: number) => {
		const scale = characterScaleRef.current;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		/* 캐릭터 */
		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(32 * scale, canvas.height - (90 * scale), 20 * scale, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillRect(30 * scale, canvas.height - (70 * scale), 3 * scale, 40 * scale);
		/* 활 */
		ctx.save();
		ctx.translate(50 * scale, canvas.height - (80 * scale));
		ctx.rotate(-angleRef.current);
		ctx.strokeStyle = 'brown';
		ctx.lineWidth = 4 * scale;
		ctx.beginPath();
		ctx.arc(0, 0, 30 * scale, -Math.PI / 2, Math.PI / 2);
		ctx.stroke();
		ctx.restore();
		/* 화살 */
		arrowsRef.current.forEach((arrow) => {
			arrow.x += arrow.vx;
			arrow.y += arrow.vy;
			arrow.vy += gravity;

			ctx.fillStyle = 'gray';
			ctx.fillRect(arrow.x, arrow.y, 30 * scale, 2 * scale);
		});
		arrowsRef.current = arrowsRef.current.filter((arrow) => (arrow.y <= canvas.height && arrow.x <= canvas.width));
		/* 과녁 */
		if (Math.random() < 0.01) spawnTarget(canvas);

		targetsRef.current.forEach((target) => {
			target.x += target.vx;

			ctx.fillStyle = 'blue';
			ctx.beginPath();
			ctx.ellipse(target.x, target.y, (target.width/2)*scale, (target.height/2)*scale, 0, 0, Math.PI * 2);
			ctx.fill();
		});

		const beforeTargetCount = targetsRef.current.length;
		targetsRef.current = targetsRef.current.filter((target) => target.x + target.width > 0);
		const afterTargetCount = targetsRef.current.length;
		const missTargetCount = beforeTargetCount - afterTargetCount;

		if (missTargetCount > 0) setScore((prevScore) => prevScore - missTargetCount);

		checkCollision();
		requestAnimationFrame(() => draw(canvas, ctx, gravity));
	}

	/**
	 * 캔버스 위에서 마우스 움직임
	 * @param canvas 
	 * @param e 
	 */
	const handleMouseMove = (canvas: HTMLCanvasElement, e: MouseEvent) => {
		const rect = canvas.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const bowX = 50;
		const bowY = canvas.height - 80;
		const dx = mouseX - bowX;
		const dy = bowY - mouseY;
		angleRef.current = Math.atan2(dy, dx);
	}

	/**
	 * 활쏘기
	 * @param canvas 
	 */
	const shootArrow = (canvas: HTMLCanvasElement) => {
		const scale = characterScaleRef.current;
		const bowX = 50 * scale;
		const bowY = canvas.height - (80 * scale);
		const speed = 15 * scale;
		const shoot: Arrow = {
			x: bowX,
			y: bowY,
			vx: speed * Math.cos(angleRef.current),
			vy: -speed * Math.sin(angleRef.current)
		}

		arrowsRef.current.push(shoot);
	}

	/**
	 * 마우스 왼쪽 클릭
	 * @param canvas 
	 * @param e 
	 */
	const handleMouseDown = (canvas: HTMLCanvasElement, e: MouseEvent) => {
		if (e.button === 0) shootArrow(canvas);
	}

	/**
	 * 마우스 우클릭 방지
	 * @param e 
	 * @returns 
	 */
	const handleContextMenu = (e: MouseEvent) => e.preventDefault();

	return (
		<main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
			<div className="absolute top-7 left-2 md:top-7 md:left-13 lg:top-7 lg:left-77 font-bold bg-white bg-opacity-70 px-2 py-1 rounded">
				<span className="text-sm sm:text-base md:text-base lg:text-lg font-bold">점수 : {score}</span>
			</div>
			<canvas
				ref={canvasRef}
				className="border bg-white mb-4"
			/>

			{gameOver && (
				<div className="absolute inset-0 flex flex-col items-center justify-center bg-gray bg-opacity-50 backdrop-blur-sm">
					<h1 className="text-6xl font-bold text-pink-600 mb-10">게임 오버</h1>
					<button
						className="px-6 py-3 bg-pink-600 text-white rounded"
						onClick={() => {
							setGameOver(false);
							setScore(0);
							arrowsRef.current = [];
							targetsRef.current = [];
						}}
					>다시 시작하기</button>
				</div>)}
		</main>
	);
}