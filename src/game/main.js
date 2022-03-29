import Phaser from 'phaser';
import { useEffect } from 'react';

export default function Main() {
	useEffect(() => {
		const config = {
			type: Phaser.AUTO,
			width: window.innerWidth,
			height: window.innerHeight,
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 50 }
				}
			},
			scene: {
				preload: preload,
				create: create
			}
		};

		new Phaser.Game(config);

		function preload() {
			this.load.image('Sky', '/assets/sky.png');
		}

		function create() {
			this.add.image(400, 300, 'Sky');
		}
	}, []);
	return <div>Phaser Game</div>;
}
