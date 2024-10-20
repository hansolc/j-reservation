const DesginGuideLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body className="px-2">{children}</body>
    </html>
  );
};

export default DesginGuideLayout;
