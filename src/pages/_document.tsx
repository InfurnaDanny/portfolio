import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap"
					rel="stylesheet"
				/>
				<script src="https://kit.fontawesome.com/0aa9b45f24.js"></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
