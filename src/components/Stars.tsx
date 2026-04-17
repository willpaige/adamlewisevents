import { StarIcon } from "./Icons";

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="test-stars">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}
