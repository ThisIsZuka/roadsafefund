export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="animate-pulse text-xl font-medium text-muted-foreground">
        กำลังโหลด...
      </span>
    </div>
  );
}