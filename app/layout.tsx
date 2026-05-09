import type { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({
    children
} : {
    children: ReactNode
}) {
    return (
        <html lang="ko">
            <body className="bg-gray-100 text-gray-900">
                {children}
            </body>
        </html>
    )
}