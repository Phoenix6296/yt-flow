import { Toaster } from "react-hot-toast";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:mx-auto lg:w-96">{children}</body>
      <Toaster />
    </html>
  );
}
